import React from 'react';
import './ProductBox.css'; // You can keep the same CSS file to avoid redundancy

function ContractBox({ brand, model, protection, start_date, end_date,onCompleteClick, onExtendClick }) {
    return (
        <div className="product-box">
            <h2 className="product-title">Contract</h2>
            <div className="product-info">
                <p>Brand Name: {brand}</p>
                <p>Model: {model}</p>
                <p>Protection: {protection}</p>
                <p>Approved Since: {start_date.slice(0,10)}</p>
                <p>Approved Until: {end_date.slice(0,10)}</p>
               
            </div>
            <div className="button-container">
                <button onClick={onCompleteClick} className="product-button">Add a claim</button>
                <button onClick={onExtendClick} className="product-button">Consult a claim</button>
            </div>
        </div>
    );
}

export default ContractBox;
