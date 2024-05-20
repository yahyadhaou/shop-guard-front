// Navbar.js
import React from 'react';
import './Navbar.css'; // Import du fichier CSS
import logo from './lg.png'; // Import du logo

const EnteteInsurance = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <h1 className="title">Insurance</h1>
    </div>
  );
};

export default EnteteInsurance;
