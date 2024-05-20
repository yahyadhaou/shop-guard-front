import React, { useState,useEffect} from 'react';
import './Claims.css';
import ContractBox from '../../components/ContractBox'; 
import logo from "../../image/lg.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Claims() {

  const id = localStorage.getItem("id");
  const [contract, setContract] = useState([]);
  const navigate =useNavigate()

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/contract/getdatacontractssbyid/${id}`) 
      .then((res) => {
        setContract(res.data);
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  }, [id]);



  return (
    <div className='bg'>
      <div className="navbar">
        <a className="pic" href="/app">
          <img src={logo} alt="Logo" />
        </a>
        <h2>Claims</h2>
      </div>
      <h1 className="page-title">My contracts</h1>
      <div className="product-container">
        {contract.map(contract => (
          <ContractBox
            key={contract.id}
            brand={contract.brand}
            model={contract.model}
            protection={contract.protection}
            start_date={contract.start_date}
            end_date={contract.end_date}
           
            onCompleteClick={() => {
             navigate(`/addclaim/${id}/${contract.id}`)
              console.log(`Add a claim ${contract.id} `);
            }}
            onExtendClick={() => {
              navigate(`/consultclaim/${id}/${contract.id}`)
              console.log(`Consult a claim ${contract.id} ${id}`);
            }}
          />
        ))}
      </div>
    </div>
  );
}