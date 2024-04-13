import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/nav.css';
import Modal from '@mui/material/Modal';
import { FaCartShopping } from "react-icons/fa6";

const Nav = () => {
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
    <div className="nav-bar">
      <div className="logo-container">
        <h2 className="nav_logo">Bags</h2>
      </div>

      <div className="link-container">
        <a href="/gallery" className="link">
          <span>Products</span>
        </a>
        <a href="/about" className="link">
          <span>About Us</span>
        </a>
        <a href="/delivery" className="link">
          <span>Shipping & Delivery</span>
        </a>
        <a href="/contact" className="link">
          <span>Contact</span>
        </a>
      </div>

      <div type="button" onClick={handleOpen} className="button-container">
        <a href="/cart" className="link">
          <FaCartShopping className="nav_logo" />
          {cartItemCount > 0 && <span className="cart-item-count">{cartItemCount}</span>} {/* Display cart item count if it's greater than 0 */}
        </a>
      </div>
    </div>
  );
};

export default Nav;
