import React, { useState, useEffect } from 'react';
import './Repair.css';
import ProductBox from '../../components/ProductBox';
import logo from '../../image/lg.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Repair2 from '../RepairClean/Repair2';

export default function Repair() {
  const [claimwork, setClaimwork] = useState([]);
  const navigate = useNavigate();
  const insurance = localStorage.getItem("insurance");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/claims/getdataWorkshop/${insurance}`) 
      .then((res) => {
        setClaimwork(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [insurance]);

  const updateStatus = (status, id) => {
    axios
      .put(`http://localhost:8000/api/claims/updateStatus/${id}`, { status })
      .then((res) => {
        setClaimwork((prevClaims) =>
          prevClaims.map((claim) =>
            claim.id === id ? { ...claim, status, workshop: 'no' } : claim
          )
        );
        navigate("/Claimslist");
      })
      .catch((err) => console.log(err));
  };

  if (!claimwork) {
    return <Repair2 />;
  }

  return (
    <div className='bg'>
      <div className="navbar">
        <a className="pic" href="app">
          <img src={logo} alt="Logo" />
        </a>
        <h2>Repair workshop</h2>
      </div>
      <div className="product-container">
        {claimwork.map(product => (
          <ProductBox
            key={product.id}
            brand={product.brand}
            model={product.model}
            description={product.description}
            onClick={() => {
              updateStatus("Repair", product.id);
              console.log(`Clicked on product ${product.id}`);
            }}
          />
        ))}
      </div>
    </div>
  );
}
