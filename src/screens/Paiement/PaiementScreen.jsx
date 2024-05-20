import React, { useState,useEffect} from 'react';
import './PaiementScreen.css';
import Entetepaiement from "../../components/Entetepaiement";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PaiementScreen = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const userId = localStorage.getItem("id");
 const shippingcoast= 8
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [userdata,setUserdata] =useState([])
  const navigate =useNavigate()

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/getdataProductbyid/${id}`) 
      .then((res) => {
        setProduct(res.data);
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/users/getdatauserssbyid/${userId}`) 
      .then((res) => {
        setUserdata(res.data);
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  }, [id]);
 

  const handleConfirm = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
    navigate("/app")
  };

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  return (
    <div>
      <Entetepaiement />
      <div className="payment-method">
  <h2 
    style={{ color: '#025054d2' }} 
    onClick={() => { console.log(userId); }}
  >
    Customer Name: <span style={{ color: 'black', fontWeight: 'bold' }}>{userdata.username}</span>
  </h2>
  <hr />
  <h2 
    style={{ color: '#025054d2' }} 
    onClick={() => { console.log(userdata); }}
  >
    Customer Email: <span style={{ color: 'black', fontWeight: 'bold' }}>{userdata.email}</span>
  </h2>
</div>

      
      <div className="paiement-container">
        <div className="payment-method">
          <h2 onClick={()=>{console.log(id);}}>Payment Method</h2>
          <hr />
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Cheque"
              checked={selectedPaymentMethod === "Cheque"}
              onChange={handlePaymentMethodChange}
            /> Cheque
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Transfer/Bank Transfer"
              checked={selectedPaymentMethod === "Transfer/Bank Transfer"}
              onChange={handlePaymentMethodChange}
            /> Transfer/Bank Transfer
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Cash Payment at Delivery"
              checked={selectedPaymentMethod === "Cash Payment at Delivery"}
              onChange={handlePaymentMethodChange}
            /> Cash Payment at Delivery
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Payment by Credit Card"
              checked={selectedPaymentMethod === "Payment by Credit Card"}
              onChange={handlePaymentMethodChange}
            /> Payment by Credit Card
          </label>
        </div>
        <div className="order-summary">
          <h2>Order Summary</h2>
          <hr />
          <label>Total Items:1</label>
          <label>Shipping Cost:  {shippingcoast}  dt</label>
          <label>Insurance:  Done </label>
          <label>Total: {Number(product.price)+shippingcoast}  dt </label>
          <button onClick={handleConfirm}>Confirm</button>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClose}>&times;</span>
            <p className="popup-message">Thank you! Payment completed successfully.</p>
            <button className="popup-close-button" onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaiementScreen;
