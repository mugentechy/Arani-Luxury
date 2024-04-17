import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/product.css';
import { FaCartShopping } from "react-icons/fa6";

export default function Product({ id, title, img, price, info }) {

  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = existingCart.findIndex(item => item.id === id);
    
    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += 1;
    } else {
      existingCart.push({ id, title, img, price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));
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
