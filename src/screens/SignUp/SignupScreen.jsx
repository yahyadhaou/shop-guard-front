import React, { useState } from 'react';
import './SignScreen.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function SignupScreen() {
  const Navigate=useNavigate()
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [sexe, setSexe] = useState('');
  const [cin, setCin] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8000/api/users/register', {
        email,
        username,
        cin,
        sex: sexe, 
        phone: phoneNumber, 
        password,
        birthday,
      });
      Navigate("/login")
      console.log(response.data); 
      setEmail('');
      setPhoneNumber('');
      setUsername('');
      setPassword('');
      setConfirmPassword('');
      setBirthday('');
      setSexe('');
      setCin('');
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
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              placeholder='Username'
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              placeholder='Cin'
              type="text"
              id="cin"
              name="cin"
              value={cin}
              onChange={(e) => setCin(e.target.value)}
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
          <div className="form-group">
            <input
              placeholder='Birthday'
              type="date"
              id="birthday"
              name="birthday"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <select
              id="sexe"
              name="sexe"
              value={sexe}
              onChange={(e) => setSexe(e.target.value)}
              required
            >
              <option value="">Sexe</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </form>
      </div>
      <div className="button-container">
        <button type="submit" className="button"onClick={handleSubmit}>Sign Up</button>
        <button type="submit" className="button"onClick={()=>{Navigate("/SignupScreenInsurance")}}>Sign Up as insurance</button>
      </div>
    </div>
  );
}

export default SignupScreen;
