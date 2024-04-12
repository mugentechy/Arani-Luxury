import { IoArrowBack } from "react-icons/io5";
import { Card } from 'react-bootstrap';
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineVerified } from "react-icons/md";
import { CiPhone } from "react-icons/ci";

export default function Cart() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Your Cart</h2>
          {/* Cart items will be listed here */}
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          {/* Cart items list */}
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Product Title</h5>
              <p className="card-text">Quantity: 1</p>
              <p className="card-text">Price: $10.00</p>
            </div>
          </div>
          {/* More cart items can be added here */}
        </div>
        <div className="col-md-4">
          {/* Cart summary */}
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Cart Summary</h5>
              <p className="card-text">Total items: 3</p>
              <p className="card-text">Total price: $30.00</p>
            </div>
          </div>
          {/* Checkout options */}
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Checkout</h5>
              <button className="btn btn-primary">Proceed to Checkout</button>
            </div>
          </div>
          {/* Delivery information */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Delivery Information</h5>
              <p className="card-text">
                <CiDeliveryTruck /> Free shipping on all orders
              </p>
              <p className="card-text">
                <MdOutlineVerified /> Secure payment
              </p>
              <p className="card-text">
                <CiPhone /> Need help? Contact us at <a href="tel:+123456789">+123456789</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
