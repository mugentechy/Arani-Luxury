import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/product.css';
import { FaCartShopping } from "react-icons/fa6";

export default function Product({ id, title, img, price, info }) {

  // Function to add the product to the cart
  const addToCart = () => {
    // Get the existing cart items from local storage
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    // Add the new item to the cart
    const updatedCart = [...existingCart, { id, title, img, price }];
    // Save the updated cart to local storage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <>
      <div className="img-container position-relative">
        <img src={img} alt="" className="card-img-top product" />
        <button className="cart-btn color" onClick={addToCart}>
          <FaCartShopping />
        </button>
      </div>
      <Link to={`/details/${id}`}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{info?.substring(0, 200)}</p>
        <h5 className="card-price">{price}</h5>
      </div>
    </Link>
    </>
  );
}
