import React, { useState } from 'react';
import './SignScreeninsurance.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function SignupScreenInsuranceScreen() {
  const Navigate=useNavigate()
  const [email, setEmail] = useState('');
  const [phone, setphone] = useState('');
  const [name, setname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
 

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8000/api/insurance/registerinsurance', {
        email,
        name,
        phone, 
        password,
       
      });
      Navigate("/LoginScreenInsurance")
      console.log(response.data); 
      setEmail('');
      setphone('');
      setname('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="signup-screen">
      <h2>Sign Up</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-row">
          <div className="form-group">
            <input
              placeholder='Email'
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              placeholder='Phone Number'
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              placeholder='name'
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              placeholder='Password'
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              placeholder='Confirm Password'
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        </form>
      </div>
      <div className="button-container">
        <button type="submit" className="button"onClick={handleSubmit}>Sign Up</button>
      </div>
    </div>
  );
}

export default SignupScreenInsuranceScreen;
