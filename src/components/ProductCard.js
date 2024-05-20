// ProductCard.js

import React from 'react';
import "./ProductCard.css";
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ id,category, name , filter , price, imageUrl }) => {
    const isMatch = filter === 'all' || category === filter;
    const navigate =useNavigate()

    const classNames = `filterDiv ${category} ${isMatch ? 'show' : 'hide'}`;
     const handelnavigation = ()=>{
        navigate(`product/${id}`)
        console.log(id);
     }
    return (
        <div className={classNames} onClick={handelnavigation}>
        <img src={imageUrl} alt={name} />
        <div className="product-info">
            <div className="product-name">{name}</div>
            <div className="product-price"><strong>{price}</strong></div>
        </div>
       

    </div>
    );
}

export default ProductCard;

