
import React from 'react';
import Navbar from '../../components/Navbar';
import './HomeScreen.css'; 
import Slideshow from '../../components/Slideshow';
import icone1 from "../../image/save-money 1.png";
import icone2 from "../../image/legal-compliance 1.png";
import icone3 from "../../image/truck 1.png";
import icone4 from "../../image/login (3) 1.png";


export default function HomeScreen() {
  return (
    <div>
       
      <Navbar />
      
    <Slideshow />
      <div className="values">
        <div className="value">
          <img src={icone4} alt="Easy Process Icon" />
          <p>Easy Process</p>
        </div>
        <div className="value">
          <img src={icone3} alt="Fast Delivery Icon" />
          <p>Fast Delivery</p>
        </div>
        <div className="value">
          <img src={icone2} alt="Policy Controlling Icon" />
          <p>Policy Controlling</p>
        </div>
        <div className="value">
          <img src={icone1} alt="Money Saving Icon" />
          <p>Money Saving</p>
        </div>
      </div>
    </div>
  );
}
