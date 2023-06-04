import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      Login
      <section>
        <form action="">
          <input type="text" placeholder='email'/>
          <input type="password" placeholder='password'/>
          <button type='submit'>Login</button>
          <h4>Or</h4>
          <Link to="/register">Register</Link>
        </form>
      </section>
    </div>
  )
}

export default Login
