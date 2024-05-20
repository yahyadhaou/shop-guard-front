import React from 'react';
import ClaimDetails from './ClaimDetails';

const ClaimDetailsPage = () => {
  // Supposons que vous ayez les détails d'une réclamation sous forme d'objet
  const claim = {
    title: 'Claim Title',
    date: '2024-05-13',
    stolen: true,
    description: 'Description of the claim',
    attachments: 'Attachment file',
    refundableAmount: '$1000',
  };

  return (
    <div className="claim-details-page">
      <ClaimDetails claim={claim} />
    </div>
  );
};

export default ClaimDetailsPage;
