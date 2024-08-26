import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/Login.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Retrieve the stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && 
       (storedUser.email === username || storedUser.mobile === username) && 
        storedUser.password === password) {
      console.log('Login successful');
      onLogin(storedUser); // Update parent component's state
      navigate('/'); // Redirect to the homepage after successful login
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <h2>Login</h2>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
        </div>
        <div className="login-right">
          <input
            type="text"
            placeholder="Enter Email/Mobile number"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <p className="terms">By continuing, you agree to Flipkart's <Link to="#">Terms of Use</Link> and <Link to="#">Privacy Policy</Link>.</p>
          <p className="or-text">OR</p>
          <button className="otp-login">Request OTP</button>
          <p className="signup-link">New to Flipkart? <Link to="/signup">Create an account</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
