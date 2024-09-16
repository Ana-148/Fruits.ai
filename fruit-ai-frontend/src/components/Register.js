import React, { useState } from 'react';
import './css/register.css'; // Using the same CSS as the login component for consistency

const Register = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Password and Confirm Password do not match!");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long!");
      return;
    }

    alert("Congratulations! You are successfully registered. Kindly return to the login page.");
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2 className="login-title">Register</h2>
        <p className="terms-text">
          By signing up you are agreeing to our <a href="/terms">Term and privacy policy</a>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input type="text" name="name" required placeholder="Name" />
          </div>
          <div className="input-box">
            <input type="email" name="email" required placeholder="Email Address" />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="confirm_password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
          </div>
          <button type="submit" className="btn">Register</button>
          {error && <div className="error">{error}</div>}
        </form>
        <div className="signup-link">
          <a href="/">Already have an account? Login here</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
