import React from 'react';
import "./css/login.css"

function Login() {
  return (
    <div className="container">
      <div className="login-box">
        <h2>Login</h2>
        <form action="#">
          <div className="input-box">
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="forgot-pass">
            <a href="/forget-password">Forgot your password?</a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="signup-link">
            <a href="/register">Register</a>
          </div>
        </form>
      </div>
      {[...Array(50).keys()].map((i) => (
        <span key={i} style={{ '--i': i }} />
      ))}
    </div>
  );
}

export default Login;