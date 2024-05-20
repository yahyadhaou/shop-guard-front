import React, { useState } from 'react';
import './LoginScreen.css';
import logo from '../../components/lg.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/users/login', {
        email,
        password,
      });
      console.log(response.data);
      
      localStorage.setItem('token', response.data.token); 
      localStorage.setItem('id',response.data.id)
      setEmail('');
      setPassword('');
      
      navigate("/app"); 
    } catch (error) {
      console.error('Error logging in user:', error);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-form-container">
        <img src={logo} alt="ShopGuarded" className="login-logo" />
        <h2 className="login-title">Login User</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          required
        />

        <button type="submit" className="login-button" onClick={handleSubmit}>
          Login
        </button>

        <a className="signup-link" onClick={() => navigate("/signup")}>
          Don't have an account? Sign up
        </a>

        <button type="submit" className="login-button" onClick={()=>{navigate("/LoginScreenInsurance")}}>
          Login as Insurance 
        </button>
      </div>
      
    </div>
  );
}

export default LoginScreen;
