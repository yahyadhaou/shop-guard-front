import React from 'react';
import './Slideshow.css'; // Assurez-vous d'importer votre fichier CSS

const Slideshow = () => {
  return (
    <div className="banner">
      <div className="overlay"></div> {/* Ajout d'un overlay pour assombrir l'image */}
      <div className="banner-content">
      <span style={{ color: '#025054', fontWeight: 'bold' }}>Shop</span>
  <span style={{ color: '#282F39', fontWeight: 'bold' }}> Safe </span>
  <span style={{ color: '#C72532', fontWeight: 'bold' }}>, Guarded</span>
  <span style={{ color: '#282F39', fontWeight: 'bold' }}> Always </span>
      </div>
    </div>
  );
};

export default Slideshow;
