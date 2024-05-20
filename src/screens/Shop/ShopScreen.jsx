import ProductCard from '../../components/ProductCard';
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import axios from 'axios';
import './ShopScreen.css';
import logo from '../../image/lg.png';

const ShopScreen = () => {
  const [filter, setFilter] = useState('all');
  const [data,setData]=useState([])
  const navigate =useNavigate()

  const filterSelection = (category) => {
    setFilter(category);
  }

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`http://localhost:8000/api/products/getdataProduct`)
      .then((res) => {
        setData(res.data);
        console.log(res.data,"yahya");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
    <div className="navbar">
      <a className="pic" href="home">
        <img src={logo} alt="Votre logo" />
      </a>
      <Button onClick={() => navigate('/app')}>Shop</Button>
      <Button href="#">Police</Button>
      <Button href="/claims">Contracts</Button>
      <div className="dropdown">
        <Button className="dropbtn">
          Insurances <i className="fa fa-caret-down"></i>
        </Button>
        <div className="dropdown-content">
          <Button >Auto-Claims</Button>
          <Button onClick={() => navigate('/claims')}>Claims Processing</Button>
          <Button>Contract Management</Button>
        </div>
        
      </div>
      <button className='btn' onClick ={()=>{navigate("/login")}}>Logout</button>

    </div>

    <div id="myBtnContainer">
      <button className={filter === 'all' ? 'btn active' : 'btn'} onClick={() => filterSelection('all')}>
        ALL
      </button>
      <button className={filter === 'computer' ? 'btn active' : 'btn'} onClick={() => filterSelection('computer')}>
        Computer
      </button>
      <button className={filter === 'smartphone' ? 'btn active' : 'btn'} onClick={() => filterSelection('smartphone')}>
        Smartphone
      </button>
      <button className={filter === 'homeappliance' ? 'btn active' : 'btn'} onClick={() => filterSelection('homeappliance')}>
        Home Appliance
      </button>
    </div>

    <div className="product-container">
      {data.map((product) => {
        const { id, category, name, price, image } = product;
        return (
          <ProductCard
            id={id}
            category={category}
            name={name}
            price={`${price}Dt`}
            imageUrl={image}
            filter={filter}
          />
        );
      })}
    </div>
  </div>
  );
}

export default ShopScreen;
