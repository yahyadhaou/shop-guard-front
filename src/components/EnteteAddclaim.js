// Navbar.js
import React from 'react';
import './navbar.css'; // Import du fichier CSS
import logo from './lg.png'; // Import du logo

const EnteteAddclaim = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <h1 className="title">Add a Claim</h1>
    </div>
  );
};

export default EnteteAddclaim;
