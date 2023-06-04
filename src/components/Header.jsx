import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../main'

const Header = () => {
  
  const {isAuthenticated,setIsAuthenticated} = useContext(Context);
  console.log(isAuthenticated)
  console.log(setIsAuthenticated)
  return (
    <div>
      <nav>
        <div>
            <h2>ThoughtFlow</h2>
            <div>
                <Link to={"/"}>Home</Link>
                {
                  isAuthenticated ? <Link to={"/logout"}>Logout</Link> : <Link to={"/login"}>Login</Link>
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
