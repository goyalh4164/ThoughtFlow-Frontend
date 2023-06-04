import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav>
        <div>
            <h2>ThoughtFlow</h2>
            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/login"}>Login</Link>
                <Link to={"/register"}>Register</Link>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
