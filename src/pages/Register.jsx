import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios"
import { server } from "../main";
import toast from "react-hot-toast"
import { Context } from "../main";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {isAuthenticated,setIsAuthenticated} = useContext(Context)

  const registerHandler =async (e) => {
    e.preventDefault(); // to prevent refreshing of the pafe
    try{
      console.log(username,email,password)
    const {data} =await axios.post(`${server}/users/register`,{
      username,email,password
    },{
      headers:{
        "Content-Type":"application/json"
      },
      withCredentials:true,
    });
    toast.success(data.message);
    setIsAuthenticated(true);
  }
  catch(error){
    toast.error("Some error")
    console.log(error)
    setIsAuthenticated(false);
    }
  };
  
  // if User is authenticated
  if(isAuthenticated) return <Navigate to="/"/>

  return (
    <div>
      Register
      <section>
        <form onSubmit={registerHandler}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="name"
            required
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="email"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            required
          />
          <button type="submit">Register</button>
          <h4>Or</h4>
          <Link to="/login">Login</Link>
        </form>
      </section>
    </div>
  );
};

export default Register;
