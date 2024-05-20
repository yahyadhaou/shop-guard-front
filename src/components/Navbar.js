import React from 'react';
import './navbar.css';
import logo from './lg.png';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const Navigate =useNavigate()
  return (
    <div className="navbar">
<a  className="pic" href="/app">
<img src={logo} alt="Votre logo" />
</a>
<a href="/app">Shop</a>
      <a  href="/Repair">Repair workshop</a>
      <a href="#">Police</a>

      <div className="dropdown">
        <button className="dropbtn">Insurances
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href='/app'>Auto-Claims</a>
          <a href='/app'>Claims Processing</a>
          <a href='/app'>Contract Management</a>
        </div>
      </div> 
    <button className='btn' onClick ={()=>{Navigate("/login")}}>Login</button>
    </div>
  );
}

export default Navbar;
