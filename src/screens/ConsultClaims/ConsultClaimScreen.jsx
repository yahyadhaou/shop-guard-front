import React, { useState, useEffect } from 'react';
import './ConsultClaimScreen.css'; 
import { useParams } from 'react-router-dom';
import Enteteconsult from '../../components/Enteteconsult';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from "../../image/lg.png"; 
import Button from '@mui/material/Button';

const ConsultClaimScreen = () => {
  const { id,contractid } = useParams();
  const navigate =useNavigate()
  const userid = localStorage.getItem("id");

  const [claimsData, setClaimsData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/claims/getdataClaimsusersbyid/${id}/${userid}`) 
      .then((res) => {
        setClaimsData(res.data);
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  }, [id]);

  if(!claimsData){
return ( <div className='bg'>
<div className="navbar">
  <a className="pic" href="/app">
    <img src={logo} alt="Logo" />
  </a>
  <h2>Claims</h2>
</div>

<p className="no-repair-orders-are-pen">No Claims for this contract
<Button onClick={() => navigate(`/addclaim/${id}/${contractid}`)} >Add claim</Button>
</p>



</div>
)
  }


  return (
    <div>
      <Enteteconsult />
      <div className="container">
        <div className="label"><span>Title of claim:</span> {claimsData.titleofclaim}</div>
        <div className="label"><span>Date of the claim:</span> {claimsData.Date_ofthe_claim}</div>
        <div className="label"><span>Description of the claim:</span> {claimsData.description}</div>
        <div className="label"><span>Status:</span> {claimsData.status}</div>
        <button className="closeButton" onClick={()=>{navigate('/claims')}}>Close</button>
      </div>
    </div>
  );
};

export default ConsultClaimScreen;
