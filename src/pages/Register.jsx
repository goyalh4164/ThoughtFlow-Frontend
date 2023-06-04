import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      Register
      <section>
        <form action="">
          <input type="text" placeholder="name" />
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />
          <button type="submit">Register</button>
          <h4>Or</h4>
          <Link to="/login">Login</Link>
        </form>
      </section>
    </div>
  );
};

export default Register;
