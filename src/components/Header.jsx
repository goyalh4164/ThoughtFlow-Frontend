import React, { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Context } from '../main'
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { server } from '../main';

const Header = () => {
  
  const {isAuthenticated,setIsAuthenticated} = useContext(Context);
  console.log(isAuthenticated)
  console.log(setIsAuthenticated)

  const logoutHandler =async (e) => {
    try{
      const {data} =await axios.post(`${server}/users/logout`,{},
      {
      withCredentials:true,
    }
    );
    toast.success(data.message);
    setIsAuthenticated(false);
    <Navigate to="/login"/>
    }
    catch(error){
      toast.error("Some error")
      console.log(error)
      setIsAuthenticated(true);
    }
  };
  return (
    <div>
      <nav>
        <div>
            <h2>ThoughtFlow</h2>
            <div>
                <Link to={"/"}>Home</Link>
                {
                  isAuthenticated ? <Link to="/account">Account</Link> : ""
                }
                {
                  isAuthenticated ? <button onClick={logoutHandler}>Logout</button> : <Link to={"/login"}>Login</Link>
                }
                {
                  (!isAuthenticated) ? <Link to={"/register"}>Register</Link> : ""
                }
                
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
