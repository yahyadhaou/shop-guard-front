import React, { useState,useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, ButtonBase } from '@mui/material';
import logo from '../../image/lg.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function CustomStylingExample() {
  const insurance = localStorage.getItem("insurance");
  const [contract, setContract] = useState([]);
  const navigate =useNavigate()
  const columns = [
    { field: 'id', headerName: 'ID', width: 180 },
    { field: 'Date_ofthe_claim', headerName: 'Dates', width: 250 },
    { field: 'username', headerName: 'Name', width: 350 },
    { field: 'email', headerName: 'email', width: 350 },
    { field: 'phone', headerName: 'Phones', width: 150 },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      renderCell: (params) => (
        <Button
        variant="contained"
        style={{
          backgroundColor: (() => {
            switch (params.value) {
              case 'Processed':
                return 'green';
              case 'Unprocessed':
              case 'Rejected':
                return 'red';
              case 'Repair':
                return 'blue';
              default:
                return 'gray'; 
            }
          })(),
          color: 'white',
        }}
        onClick={() => navigate(`/ConsultClaiminsuranceScreen/${params.row.id}`)}
      >
        {params.value}
      </Button>
      ),
    },
  ];
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/claims/getdataClaimsbyinsuranceid/${insurance}`) 
      .then((res) => {
        setContract(res.data);
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  }, [insurance]);
  return (
    <>
      <div>
        <div className="navbar">
          <a className="pic" href="/app">
            <img src={logo} alt="Votre logo" />
          </a>
          <h2>List of claims</h2>
          <ButtonBase onClick={()=>{navigate("/Repair")}}>Repair workshop</ButtonBase>
        </div>
      </div>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={contract}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
    </>
  );
}
