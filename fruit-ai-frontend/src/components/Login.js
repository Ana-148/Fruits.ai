import React, { useState } from 'react'
import "./css/login.css"
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [isLoggedIn] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email || !password) {
      alert('Please enter both email and password')
      return
    }
    if (!validateEmail(email)) {
      alert('Invalid email address')
      return
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters long')
      return
    }
    // Check for dummy email and password
    if (email === 'fruits@gmail.com' && password === 'dummy@fruits') {
      navigate('/home', { replace: true }); // Redirect to home page
    } else {
      setError('Invalid email or password')
    }
  }

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
  }

  return (
    <div className="container">
      <div className="login-box">
        <h2>Login</h2>
        <form action="#" onSubmit={handleSubmit}>
          <div className="input-box">
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
            <label>Password</label>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="signup-link">
            <a href="/register">Register</a>
          </div>
          {error && <div className="error">{error}</div>}
          {isLoggedIn && <div className="success">You are logged in!</div>}
        </form>
      </div>
      {[...Array(50).keys()].map((i) => (
        <span key={i} style={{ '--i': i }} />
      ))}
    </div>
  )
}

export default Login;
