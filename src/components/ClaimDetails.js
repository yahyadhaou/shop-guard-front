import React from 'react';
import './ClaimDetails.css';

const ClaimDetails = ({ claim }) => {
  if (!claim) {
    return null; // Retourne null si claim est undefined
  }

  return (
    <div className="claim-details-container">
      <ul>
        <li>Title of Claim: {claim.title}</li>
        <li>Date of the Claim: {claim.date}</li>
        <li>Stolen: {claim.stolen ? 'Yes' : 'No'}</li>
        <li>Description: {claim.description}</li>
        <li>Attachments: {claim.attachments}</li>
        <li>Refundable Amount: {claim.refundableAmount}</li>
      </ul>
      <div className="action-buttons">
        <button>Repair</button>
        <button>Refund</button>
        <button>Reject</button>
      </div>
    </div>
  );
};

export default ClaimDetails;
