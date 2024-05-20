import React from 'react';
import logo from '../../image/lg.png'; 
import './Repair2.css';

function Repair2() {
  return (
    <div className='bg'>
      <div className="navbar">
        <a className="pic" href="LoginScreen.js">
          <img src={logo} alt="Logo" />
        </a>
        <h2>Claims</h2>
      </div>
     
      <p className="no-repair-orders-are-pen">No repair orders are pending</p>
      </div>
  );
}

export default Repair2;
