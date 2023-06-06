import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";

const UpdateProfile = () => {
  const { isAuthenticated, loading, setLoading } = useContext(Context);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const updateHandler =async (e) => {
    e.preventDefault(); // to prevent refreshing of the pafe
    try{
      console.log(username,password)
    // const {data} =await axios.post(`${server}/users/register`,{
    //   username,email,password
    // },{
    //   headers:{
    //     "Content-Type":"application/json"
    //   },
    //   withCredentials:true,
    // });
    // toast.success(data.message);
    // setIsAuthenticated(true);
  }
  catch(error){
    toast.error("Some error")
    console.log(error)
    setIsAuthenticated(false);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isAuthenticated) {
          setLoading(true);
          const response = await axios.get(`${server}/users/profile`, {
            withCredentials: true,
          });
          setUsername(response.data.username);
          // Process the response data
          setLoading(false);
        } else {
          // Handle unauthenticated user
          console.log("User is not authenticated");
        }
      } catch (error) {
        // Handle error
        console.log("Error:", error);
      }
    };

    fetchData();
  }, [isAuthenticated]); // Run the effect whenever the isAuthenticated value changes
  return (
    <div>
      <h1>Update your profile</h1>
      {loading ? <Loader/> :

        <form onSubmit={updateHandler}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="name"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            required
          />
          <button type="submit">Update</button>
        </form>
      
      }
    </div>
  );
};

export default UpdateProfile;
