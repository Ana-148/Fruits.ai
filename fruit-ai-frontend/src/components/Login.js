import React, { useState } from 'react';
import './css/login.css'; // Make sure to update the CSS for styling
import { useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }
    if (!validateEmail(email)) {
      alert('Invalid email address');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }
    // Dummy login check
    if (email === 'fruits@gmail.com' && password === 'dummy@fruits') {
      navigate('/home', { replace: true }); // Redirect to home page
    } else {
      setError('Invalid email or password');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <p className="terms-text">
          By signing in you are agreeing to our <a href="/terms">Term and privacy policy</a>
        </p>
        <div className="toggle">
          <a href="/login" className="toggle-link active">Login</a> | <a href="/register" className="toggle-link">Register</a>
        </div>
        <form action="#" onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              placeholder="Email Address"
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              placeholder="Password"
            />
          </div>
          <div className="remember-forget">
            <label>
              <input type="checkbox" /> Remember password
            </label>
            <a href="/forgot-password" className="forgot-password-link">Forget password</a>
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="social-icons">
            <p>or connect with</p>
            <div className="icons">
  <i className="fab fa-facebook"></i>
  <i className="fab fa-instagram"></i>
  <i className="fab fa-pinterest"></i>
  <i className="fab fa-linkedin"></i>
</div>
          </div>
          <div className="biometric">
            <i className="biometric-icon">🔒</i>
          </div>
          {error && <div className="error">{error}</div>}
          {isLoggedIn && <div className="success">You are logged in!</div>}
        </form>
      </div>
    </div>
  );
}

export default Login;
