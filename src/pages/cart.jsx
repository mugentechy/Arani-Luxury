import React, { useState, useEffect } from 'react';
import { IoArrowBack } from "react-icons/io5";
import { Card } from 'react-bootstrap';
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineVerified } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import '../assets/form.css';
import { MdDelete } from "react-icons/md";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from local storage when component mounts
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCartItems);
  }, []);


  const handleDeleteItem = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };


console.log(cartItems)
  return (
    <div className="container">
      <div className="row mt-5">
       <h2>Contact</h2>
      <div className="col-6">

            <form  style={{ background: "white",color:"black", padding:"1rem" }} >
        <div className='input-row'>
          {/*<label htmlFor="firstName">First Name</label>*/}
          <input
            id="firstName"
            className='input'
            type='text'
            placeholder='First Name'
 
          />
          {/*<label htmlFor="lastName">Last Name</label>*/}
          <input
            id="lastName"
            className='input'
            type='text'
            placeholder='Last Name'
            autoComplete='off'
   
          />
        </div>
        <div className='input-row'>
          {/*<label htmlFor="email">Email address</label>*/}
          <input
            id="email"
            className='input'
            type='text'
            placeholder='Email address'
        
          />
          {/*<label htmlFor="phoneNumber">Phone Number</label>*/}
          <input
            id="phoneNumber"
            className='input'
            type='text'
            placeholder='Phone Number'
            autoComplete='off'
 
          />
        </div>

        <button   className="submit" type='submit'>
          Submit
        </button>
      </form>

      </div>
        <div className="col-6">
      
          {cartItems.map((item, index) => (
    <div className="custom-card mb-3">
      <img src={item.img} className="custom-img" />
      <div className="custom-card-body">
        <h5 className="custom-card-title">{item.title}</h5>
        <p className="custom-quantity">Quantity: {item.quantity}</p>
        <p className="custom-card-text">Price: Ksh{item.price}</p>
      </div>
      <button className="delete-btn"  onClick={() => handleMouseEnter(item.id)}>
        <MdDelete />
      </button>
    </div>

          ))}

                  <div className="card-body">
              <h5 className="card-title">Cart Summary</h5>
              <p className="card-text">Total items: {cartItems.length}</p>
              <p className="card-text">Total price: Ksh{cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
            </div>
        </div>

   
      </div>

    </div>
  );
}
