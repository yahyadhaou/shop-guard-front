// Claim.js
import React, { useState } from 'react';
import './Claim.css'; // Import du fichier CSS

const Claim = () => {
  const [claims, setClaims] = useState([
    {
      claimNumber: '001',
      date: '2024-05-13',
      time: '10:00',
      clientName: 'John Doe',
      phoneNumber: '123-456-7890',
      status: 'processed', 
    },
  ]);

  const toggleClaimStatus = (claimNumber) => {
    setClaims(prevClaims => {
      return prevClaims.map(claim => {
        if (claim.claimNumber === claimNumber) {
          return {
            ...claim,
            status: claim.status === 'processed' ? 'unprocessed' : 'processed'
          };
        }
        return claim;
      });
    });
  };

  return (
    <div className="claims-list-container">
      {claims.map(claim => (
        <div key={claim.claimNumber} className="claim-container">
          <table>
            <tbody>
              <tr>
                <td>Claim Number:</td>
                <td>{claim.claimNumber}</td>
              </tr>
              <tr>
                <td>Date:</td>
                <td>{claim.date}</td>
              </tr>
              <tr>
                <td>Time:</td>
                <td>{claim.time}</td>
              </tr>
              <tr>
                <td>Client Name:</td>
                <td>{claim.clientName}</td>
              </tr>
              <tr>
                <td>Phone Number:</td>
                <td>{claim.phoneNumber}</td>
              </tr>
              <tr>
                <td>Status:</td>
                <td>
                  <button
                    onClick={() => toggleClaimStatus(claim.claimNumber)}
                    className={claim.status === 'processed' ? 'claim-button processed' : 'claim-button unprocessed'}
                  >
                    {claim.status === 'processed' ? 'Processed' : 'Unprocessed'}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Claim;
