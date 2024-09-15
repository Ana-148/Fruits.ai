// src/components/Register.js
import React, { useState } from 'react';
import './css/login.css'; 

const Register = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match!");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long!");
      return;
    }

    
    
    alert("Congratulations! You are successfully registered. Kindly return to login page.")
  };

  return (
    <div className="container" style={{ "border":"2px solid pink", "background":"white" , "height": '100vh', "width":"60vh" }}>
      <div className="login-box">
        <h2>Register here</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input type="text" name="name" required />
            <label>Name</label>
          </div>
          <div className="input-box">
            <input type="email" name="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <input type="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <label>Password</label>
          </div>
          <div className="input-box">
            <input type="password" name="confirm_password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <label>Confirm Password</label>
          </div>
          {/* <div className="forgot-pass">
            <a href="#">Forgot your password?</a>
          </div> */}
          <button type="submit" className="btn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
