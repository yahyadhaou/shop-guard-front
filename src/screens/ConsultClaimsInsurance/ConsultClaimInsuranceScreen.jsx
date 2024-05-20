import React, { useState, useEffect } from 'react';
import './ConsultClaimScreen.css'; 
import { useParams } from 'react-router-dom';
import Enteteconsult from '../../components/Enteteconsult';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from "../../image/lg.png"; 
import Button from '@mui/material/Button';

const ConsultClaiminsuranceScreen = () => {
  const { id } = useParams();
  const insurance = localStorage.getItem("insurance");
  const navigate = useNavigate();
  const [claimsData, setClaimsData] = useState(null); 

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/claims/getdataClaimsbyid/${id}/${insurance}`) 
      .then((res) => {
        setClaimsData(res.data);
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  }, [id]);

  const updateStatus = (status) => {
    axios
      .put(`http://localhost:8000/api/claims/updateClaims/${id}`, { status })
      .then((res) => {
        setClaimsData({ ...claimsData, status });
        navigate("/Claimslist")
      })
      .catch((err) => console.log(err));
  };

  if (!claimsData) {
    return (
      <div className='bg'>
        <div className="navbar">
          <a className="pic" href="/app">
            <img src={logo} alt="Logo" />
          </a>
          <h2>Claims</h2>
        </div>
        <p className="no-repair-orders-are-pen">No Claims for this contract</p>
      </div>
    );
  }

  return (
    <div>
    <Enteteconsult />
    <div className="container">
      <div className="label"><span>Title of claim:</span> {claimsData.titleofclaim}</div>
      <div className="label"><span>Date of the claim:</span> {claimsData.Date_ofthe_claim}</div>
      <div className="label"><span>Description of the claim:</span> {claimsData.description}</div>
      <div className="label"><span>Status:</span> {claimsData.status}</div>
      <Button variant="contained" color="primary" onClick={() => updateStatus('Refund')}>Refund</Button>
      <span style={{ marginRight: '10px' }} /> 
      <Button variant="contained" color="primary" onClick={() => updateStatus('Reject')}>Reject</Button>
      <span style={{ marginRight: '10px' }} /> 
      <Button variant="contained" color="primary" onClick={() => updateStatus('Repair')}>Repair</Button>
      <button className="closeButton" onClick={() => { navigate('/claims') }}>Close</button>
    </div>
  </div>
  );
};

export default ConsultClaiminsuranceScreen;
