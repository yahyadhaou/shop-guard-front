import React, { useState } from 'react';
import './AddClaimForm.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const AddClaimForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [stolen, setStolen] = useState(false);
  const [attachments, setAttachments] = useState(null);
  const userId = localStorage.getItem("id");
  const navigate =useNavigate()
  const { id } = useParams();
  const handleSubmit = (event) => {
    const claimData ={
      titleofclaim:title,
      description:description,
      stolen:stolen,
      status:"processed",
      usersid:userId,
      insuranceid:1,
      contractid:id
    }
    axios
      .post('http://localhost:8000/api/claims/insertClaimssdata', claimData)
      .then((response) => {
        console.log('claims data inserted successfully:', response.data);
        navigate(`/claims`);
      })
      .catch((error) => {
        console.error('Error inserting contract data:', error);
      });
    event.preventDefault();
    // Logique de soumission du formulaire ici
    console.log('Form submitted:', { title, description, stolen, attachments });
  };

  return (
    <form onSubmit={handleSubmit} className="add-claim-form">
     
      <div>
        <label htmlFor="title">Title of Claim:</label>
        <input 
          type="text" 
          id="title" 
          name="title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label htmlFor="description">Describe the Claim:</label>
        <textarea 
          id="description" 
          name="description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>
          Stolen
          <input 
            type="checkbox" 
            name="stolen" 
            checked={stolen} 
            onChange={(e) => setStolen(e.target.checked)} 
          />
        </label>
      </div>
      <div>
        <label htmlFor="attachments">Add Attachments:</label>
        <input 
          type="file" 
          id="attachments" 
          name="attachments" 
          onChange={(e) => setAttachments(e.target.files[0])} 
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default AddClaimForm;
