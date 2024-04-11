import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import '../assets/product.css';
import { FaCartShopping } from "react-icons/fa6";
export default function Product({ id, title, img, price, info, inCart }) {
  const value = useContext(ProductConsumer);

  // Function to truncate the product info if it's too long


  return (
<>
        <div className="img-container position-relative" onClick={() => value.handleDetail(id)}>
          <Link to="/details">
            <img src={img} alt="" className="card-img-top product" />
          </Link>
          <button
            className="cart-btn color"
            disabled={inCart ? true : false}
            onClick={(e) => {
              e.stopPropagation(); // Prevent the click event from bubbling up to the parent element
              value.addToCart(id);
              value.openModal(id);
            }}
          >
            {inCart ? (
              <p className="text-capitalize mb-0" disabled>
                in cart
              </p>
            ) : (
              <FaCartShopping />
            )}
          </button>
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{info?.substring(0, 200)}</p>
          <h5 className="card-price">{price}</h5>
        
    </div>
    </>
  );
}
