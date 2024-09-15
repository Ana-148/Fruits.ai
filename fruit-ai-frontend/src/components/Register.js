//src/components/Login.js
import React from 'react';
import './css/login.css'; // Ensure that this CSS file is in the same directory

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        // You can access form values and perform the login action
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
                        <input type="password" name="password" required />
                        <label>Password</label>
                    </div>
                    <div className="input-box">
                        <input type="password" name="confirm_password" required />
                        <label> Confirm Password</label>
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

export default Login;
