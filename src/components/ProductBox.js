import React from 'react';
import './ProductBox.css';

function ProductBox({ brand, model, description, onClick }) {
    return (
        <div className="product-box">
            <h2 className="product-title">Repair Order</h2>
            <div className="product-info">
                <p>Brand Name: {brand}</p>
                <p>Model: {model}</p>
                <p>Description: {description}</p>
            </div>
            <button onClick={onClick} className="product-button">Mark repair as completed</button>
        </div>
    );
}

export default ProductBox;
