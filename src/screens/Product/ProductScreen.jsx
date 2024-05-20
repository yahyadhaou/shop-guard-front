import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductScreen.css'; 
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import logo from '../../image/lg.png';

const ProductDetailScreen = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate =useNavigate()

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/getdataProductbyid/${id}`) 
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
    <div className="navbar">
      <a className="pic" href="home">
        <img src={logo} alt="Votre logo" />
      </a>
      <Button onClick={() => navigate('/app')}>Shop</Button>
      <Button onClick={() => navigate('/login')}>Repair workshop</Button>
      <Button href="#">Police</Button>

      <div className="dropdown">
        <Button className="dropbtn">
          Insurances <i className="fa fa-caret-down"></i>
        </Button>
        <div className="dropdown-content">
          <Button onClick={() => navigate('/login')}>Auto-Claims</Button>
          <Button>Claims Processing</Button>
          <Button>Contract Management</Button>
        </div>
      </div>
    </div>
    <div className="product-details-container">
      {product ? (
        <div className="product-details">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-info">
            <h2>{product.name}</h2>
            <p className="product-brand">Brand: {product.brand}</p>
            <p className="product-model">Model: {product.model}</p>
            <p className="product-category">Category: {product.category}</p>
            <p className="product-color">Color: {product.color}</p>
            <p className="product-price">Price: {product.price} Dt</p>
            <p className="product-size">Size: {product.size} cm²</p>
          </div>
          <Button onClick={() => navigate(`/formachat/${id}`)}>paiement</Button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
  );
};

export default ProductDetailScreen;
