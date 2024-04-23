import React, { useState, useEffect } from 'react';
import { IoArrowBack } from "react-icons/io5";
import { Card,Modal,Button } from 'react-bootstrap';
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineVerified } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import '../assets/form.css';
import { MdDelete } from "react-icons/md";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
    const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCartItems);
  }, []);


  const handleDeleteItem = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setShowModal(true); // Show the modal when the form is submitted
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };

  const handlePrint = () => {
    window.print(); // Print the receipt
  };


  return (
    <div className="container">
      <div className="row mt-5">
       <h2>Contact</h2>
      <div className="col-6">

            <form  style={{ background: "white",color:"black", padding:"1rem" }} onSubmit={handleSubmit}>
        <div className='input-row'>
          {/*<label htmlFor="firstName">First Name</label>*/}
          <input
            id="firstName"
            className='input'
            type='text'
            placeholder='First Name'
            onChange={(e) => setFirstName(e.target.value)}
 
          />
          {/*<label htmlFor="lastName">Last Name</label>*/}
          <input
            id="lastName"
            className='input'
            type='text'
            placeholder='Last Name'
            autoComplete='off'
            onChange={(e) => setLastName(e.target.value)}
   
          />
        </div>
        <div className='input-row'>
          {/*<label htmlFor="email">Email address</label>*/}
          <input
            id="email"
            className='input'
            type='text'
            placeholder='Email address'
            onChange={(e) => setEmail(e.target.value)}
        
          />
          {/*<label htmlFor="phoneNumber">Phone Number</label>*/}
          <input
            id="phoneNumber"
            className='input'
            type='text'
            placeholder='Phone Number'
            autoComplete='off'
            onChange={(e) => setPhoneNumber(e.target.value)}
 
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
      <button className="delete-btn"  onClick={() => handleDeleteItem(item.id)}>
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


          <Modal  show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header style={{ backgroundImage:`url('/images/invalid.jpg')` }} closeButton>
          <Modal.Title>Arani Luxury</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundImage:`url('/images/invalid.jpg')` }}>
      
  <p>{firstName} {lastName}</p>
  <p>{email}</p>
  <p>{phoneNumber}</p>
  <h5>Items Purchased:</h5>
  {cartItems.map((item, index) => (
    <div key={index} className="custom-card mb-3">
      <img src={item.img} className="custom-img" alt={item.title} />
      <div className="custom-card-body">
        <h5 className="custom-quantity">{item.title}</h5>
        <p className="custom-quantity">Quantity: {item.quantity}</p>
        <p className="custom-quantity">Price: Ksh{item.price}</p>
      </div>

    </div>
  ))}
  <div className="card-body">

    <p className="custom-quantity">Total items: {cartItems.length}</p>
    <p className="custom-quantity">Total price: Ksh{cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
  </div>
        </Modal.Body>
        <Modal.Footer style={{ backgroundImage:`url('/images/invalid.jpg')` }}>
          <Button variant="secondary" onClick={handlePrint}>Print</Button>
          <Button variant="primary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>


    </div>
  );
}
