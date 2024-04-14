import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Modal from '@mui/material/Modal';
import { FaCartShopping } from "react-icons/fa6";
import '../assets/nav.css'; // Import custom CSS for navigation styling

const Navigation = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    console.log('error');
  };

  const [open, setOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0); // State to track the number of items in the cart

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    // Fetch cart items count from localStorage or any other source
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCartItemCount(storedCart.length);
    }
  }, []);

  return (
    <Navbar bg="light" expand="lg" className="container nav-bar">
      <Navbar.Brand href="/" className="logo-container">
        <h3 className="nav_logo">Bags</h3>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto align-items-center link-container">
          <Nav.Link href="/gallery">Products</Nav.Link>
          <Nav.Link href="/about">About Us</Nav.Link>
          <Nav.Link href="/delivery">Shipping & Delivery</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        <Nav className="button-container">
          <Nav.Link onClick={handleOpen} className="cart-icon">
            <FaCartShopping className="nav_logo" />
            {cartItemCount > 0 && <span className="cart-item-count">{cartItemCount}</span>}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
