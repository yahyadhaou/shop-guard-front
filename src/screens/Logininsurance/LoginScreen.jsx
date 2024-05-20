import React, { useState } from 'react';
import './LoginScreen.css';
import logo from '../../components/lg.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginScreeninsurance() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/insurance/logininsurance', {
        email,
        password,
      });
      console.log(response.data);
      
      localStorage.setItem('token', response.data.token); 
      localStorage.setItem('insurance',response.data.insuranceid)
      setEmail('');
      setPassword('');
      
      navigate("/Claimslist"); 
    } catch (error) {
      console.error('Error logging in insurance:', error);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-form-container">
        <img src={logo} alt="ShopGuarded" className="login-logo" />
        <h2 className="login-title">Login insurance</h2>
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

        <button type="submit" className="login-button" onClick={()=>{navigate("/login")}}>
          Login as user 
        </button>
      </div>
      
    </div>
  );
}

export default LoginScreeninsurance;
