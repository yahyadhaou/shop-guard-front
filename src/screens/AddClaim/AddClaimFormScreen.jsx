import React from 'react';
import EnteteAddclaim from '../../components/EnteteAddclaim'; 
import AddClaimForm from '../../components/AddClaimForm'; 



const AddClaimFormScreen = () => {
  return (
    <div className="app-container">
      <EnteteAddclaim />
      <AddClaimForm/>
      
    </div>
  );
};

export default AddClaimFormScreen;
