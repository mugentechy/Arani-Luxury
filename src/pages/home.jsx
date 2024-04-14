import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Product from "../components/Product";
import Reviews from "../components/Reviews";
import '../assets/banner.css'
import { storeProducts } from '../utils/data';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { ImQuotesLeft } from "react-icons/im";
import jumboData from '../utils/jumbo.json'


export default function Home() {

   const [email, setEmail] = useState('');
   const [banner, setBanner] = useState([])
     const [isHovered, setIsHovered] = useState(false);
      const [selectedPrice, setSelectedPrice] = useState(null);
  const [counter, setCounter] = useState(1);

  const handlePriceChange = (price) => {
    setSelectedPrice(price);
  };

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter((prevCounter) => prevCounter - 1);
    }
  };

  const handleAddToCart = () => {
    // Implement add to cart functionality
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  useEffect(() => {
    async function fetchData() {
      // Fetch initial banner data
      setBanner(jumboData[Math.floor(Math.random() * jumboData.length)]);
    }
    fetchData();
  }, []);

  const handleCategoryChange = (category) => {
    // Filter banner data based on category and set the new banner
    const filteredBanner = jumboData.find((item) => item.category === category);
    setBanner(filteredBanner);
  };




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
    <>
<header className='banners row'>
  <div className="col-lg-6 position-relative">
    <img src="/images/banner.webp" alt="First Banner Image" className="banner-img" />
       <div className="radio-buttons container">

          <input
            type="radio"
            id="bag-radio"
            name="category"
            value="bag"
            onChange={() => handleCategoryChange('bag')}
          />
          <label htmlFor="bag-radio">Bag</label>
          
          <input
            type="radio"
            id="watch-radio"
            name="category"
            value="backpack"
            onChange={() => handleCategoryChange('backpack')}
          />
          <label htmlFor="watch-radio">BagPack</label>
        </div>
  </div>
  <img className='banner-image' src={banner?.image} alt="Second Banner Image" />
  
  <div className="col-lg-6 banner-contents">
    <h1 className='banner_title'>{banner?.title}</h1>
    <h1 className='banner_description'>{banner?.subTitle}</h1>
  </div>
</header>





  <div className="row">
    <div className="col-md-4">
           <img
            src={isHovered ? '/images/black.webp' : '/images/brown.webp'}
            alt="Image"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
   
    </div>
    <div className="col-md-4">
        <div className='banner_contents mt-5'>

        <h1 className='banner_title'>Garth Commuter Duffle</h1>


        <h1 className='banner_description'>Perfection: A perfect pick for daily use, this Polester Trending Backpack can securely be used to carry mobile phone, cards, cosmetics, iPad, umbrella and other daily essential things in a safe, secure and arranged manner. No matter wherever you are heading to, it can be your </h1>
      </div>
    </div>
    <div className="col-md-4">


 <div className="price-options mt-5">
    <div className="radio-options">
  <label>
    <input
      type="radio"
      name="price"
      value="brown"
      onChange={() => handleMouseLeave()}
    />
    <span className="radio-button brown"></span>
  </label>
  <label>
    <input
      type="radio"
      name="price"
      value="black"
      onChange={() => handleMouseEnter()}
    />
    <span className="radio-button black"></span>
  </label>
</div>

            <div className="price">
              <span> 2,000 Ksh</span>
            </div>
            <div className="radio-options" >
            <div className="counter" style={{marginRight:"10px", padding:"3px"}}>
              <button onClick={handleDecrement}>-</button>
              <span>{counter}</span>
              <button onClick={handleIncrement}>+</button>
            </div>

            <button className="nav_btn" onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>





    </div>
  </div>
  

 <div className="banner-bg row">
  <div className="col-md-8">
    <img
        className="img-fluid mb-3"
            style={{ marginTop: "-35px" }}
      src='/images/cms.webp'
      
      
    />
  </div>
  <div className="col-md-4">
    <div className='banner-contents'>
      <h1 className='banner-title'>Fair prices with<br />valuable designs</h1>
      <p className='banner-description'>Catchy bag company taglines create a difference among
        opponents in the eye of the audience and help to engage customers towards the brand.</p>
    </div>
  </div>
</div>



<div className="banner-bg position-relative">
  <div className="row">
    <div className="col-md-8 m-5">
      <div className='banner-contents'>
        <h1 className='banner-title'>Designs that fit everything</h1>
        <p className='banner-description'>It could reflect a business’s goals and personalities through the strong tagline, and customers usually remember the catchy taglines and attract them.</p>
      </div>


      <div className="row" style={{ marginTop: "60px" }}>
        {storeProducts.slice(0, 3).map(product => (
              <div className="product-wrapper mx-auto col-md-4 ">
      <div className="card" style={{ background: "white" }}>
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            info={product.info}
            img={product.img}
            price={product.price}
            inCart={product.inCart}
          />
          </div>
      </div>
        ))}
      </div>
    </div>

    <div className="col-md-4 position-absolute bottom-0 p-5  end-0">
      <img
        src='/images/right.webp'
        className="img-fluid"
        alt="Banner Image"
      />
    </div>
  </div>
</div>





<div className="row" style={{ marginTop: "50px" }}>
  <div className="col-md-4">
    <img
      src='/images/left-img.webp'
      alt="Image"
    />
  </div>
  <div className="col-md-4">
    <div className='banner_contents mt-5'>
      <h1 className='banner_title'>A purse which shows gentleman’s gesture</h1>
      <h1 className='banner_description'>Slogans are usually used to emphasize the identity of a brand and make it more reputable in terms of business. Short and eye-catching bag advertisement slogans will be beneficial for advertising the brand.</h1>
      <div type="button" className="button-container">
        <button className="nav_btn">Get Started</button>
      </div>
    </div>
  </div>
  <div className="col-md-4 d-flex justify-content-end"> {/* Added d-flex justify-content-end */}
    <img
      src='/images/right-img.avif'
      alt="Image"
    />
  </div>
</div>
<div className="banner-container">
  <div className="banner-header">
    <h1 className='banner_title'><ImQuotesLeft/></h1>
    <h6 className='banner_title'>Testimonials</h6>
  </div>


  <h3 className='b-title'>I have found the perfect blend of style and functionality in this Brown Leather Backpack. 
  As a busy professional, I needed a bag that could hold all my essentials while still looking
   polished and professional.</h3>

  <div className="customer-info">
    <div className="avatar-container">
      <img src="/images/bruce.jpg" alt="Avatar" className="avatar" />
    </div>
    <div className="review-container">
      <div className="stars-container">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <div className="customer-name">Customer Name</div>
    </div>
  </div>

  <Reviews />
</div>

        
  
    </>
  )
}