import { React, useState } from 'react'
import { toast } from 'react-toastify';
import '../assets/footer.css'; // Import your CSS file

import '../assets/form.css'; 
import { SlSocialYoutube } from "react-icons/sl";
import { SiWhatsapp } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";

export default function Footer() {

     const [email, setEmail] = useState('');

   const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send the email using an API endpoint on your server
      const response = await axios.post(`${url}/api/subscribe`, { email });
      setEmail('');
      toast(response.data.message);
    } catch (error) {

      toast('An error occurred while sending the email. Please try again.');
    }
  };

  return (
    <footer className="footer">
    <div className="container">
      <div className="row mt-4">
        <div className="col-4">
         <h3 className="footer-title">Subscribe newsletter<br /> and get 20% off</h3>
        <p className="footer-text">
          Subscribe to our exclusive bag subscription service and elevate your accessory game to new heights. 
          With our bag subscription, you'll receive carefully curated, high quality bags delivered.
        </p>

<form className="mt-4 container">
  <form className="base" onSubmit={handleSubmit} method='POST'>
 
    <input
      className="input"
      type="email"
      placeholder="Email address"
      value={email}
      onChange={({ target }) => setEmail(target.value)}
    />
    <button className="submit" type="submit">Subscribe</button>
  </form>
</form>


                     
        </div>

         <div className="col-4">
          <h3 className="footer-title">Page</h3>
          <ul >
          <li className="footer-link">Products</li>
          <li className="footer-link">About Us</li>

          <li className="footer-link">Shipping & Delivery</li>

          <li className="footer-link">Contact</li>


          </ul>


         </div>
        <div className="col-4">
          <div className="footer-link">
          <h3 className="footer-title">Link</h3>
            <button className="footer-button"><SlSocialYoutube /></button>
            <button className="footer-button"><SiWhatsapp /></button>
            <button className="footer-button"><FaInstagram /></button>
            <button className="footer-button"><RiTwitterXFill /></button>
         
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
