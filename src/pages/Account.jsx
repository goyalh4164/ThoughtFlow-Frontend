import React, { useContext, useEffect, useState } from 'react';
import { Context, server } from '../main';
import axios from 'axios';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';

const Account = () => {
  const { isAuthenticated ,loading ,setLoading} = useContext(Context);
  const [email,setEmail] =useState("");
  const [username,setUsername] =useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isAuthenticated) {
          setLoading(true)
          const response = await axios.get(`${server}/users/profile`, {
            withCredentials: true,
          });
          setEmail(response.data.email)
          setUsername(response.data.username)
          // Process the response data
          setLoading(false)
        } else {
          // Handle unauthenticated user
          console.log('User is not authenticated');
        }
      } catch (error) {
        // Handle error
        console.log('Error:', error);
      }
    };

    fetchData();
  }, [isAuthenticated]); // Run the effect whenever the isAuthenticated value changes

  return <div>
  My Account
  {
    loading ? <Loader/> : <div> <div>{username} and {email} </div> <div><Link to="/updateProfile">Update Profile</Link><button>Delete Profile</button></div></div> 
  }
  </div>;
};

export default Account;
