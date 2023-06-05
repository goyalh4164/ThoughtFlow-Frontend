import React ,{useContext, useState} from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from "axios"
import { Context, server } from "../main";
import toast from "react-hot-toast"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {isAuthenticated,setIsAuthenticated} = useContext(Context)

  const loginHandler =async (e) => {
    e.preventDefault(); // to prevent refreshing of the pafe
    try{
      console.log(email,password)
    const {data} =await axios.post(`${server}/users/login`,{
      email,password
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
      Login
      <section>
        <form onSubmit={loginHandler}>
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
          <button type='submit'>Login</button>
          <h4>Or</h4>
          <Link to="/register">Register</Link>
        </form>
      </section>
    </div>
  )
};

export default Login
