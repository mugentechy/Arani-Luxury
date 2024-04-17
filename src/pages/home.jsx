import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Product from "../components/Product";
import Reviews from "../components/Reviews";
import Category from "../components/category";
import '../assets/banner.css'
import { storeProducts } from '../utils/data';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { ImQuotesLeft } from "react-icons/im";
import jumboData from '../utils/jumbo.json'
import Pagination from '../components/pagination';


export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);
  const [email, setEmail] = useState('');
  const [banner, setBanner] = useState([])
  const [isHovered, setIsHovered] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [counter, setCounter] = useState(1);
  const [items, setItems] = useState(storeProducts);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


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


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  useEffect(() => {
    async function fetchData() {
      setBanner(jumboData[Math.floor(Math.random() * jumboData.length)]);
    }
    fetchData();
  }, []);

  const handleCategoryChange = (category) => {
    const filteredBanner = jumboData.find((item) => item.category === category);
    setBanner(filteredBanner);
  };



const handleCatChange = (category) => {
    const filteredBanner = storeProducts.find((item) => item.category === category);
    setItems([filteredBanner]);
  };




  const handleSubmit = async (event) => {
    event.preventDefault();


      toast('An error occurred while sending the email. Please try again.');

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
  
  <div className="col-md-6 banner-contents mt-5 container">
    <h1 className='banner_title'>{banner?.title}</h1>
    <h1 className='banner_description'>{banner?.subTitle}</h1>
  </div>
</header>





  <div className="row mb-5 container">
    <div className="col-md-4">
           <img
            src={isHovered ? '/images/black.webp' : '/images/brown.webp'}
            alt="Image"
            className="img-fluid"
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

            <a href="/product"><button className="nav_btn" >Go To Product</button></a>
            </div>
          </div>





    </div>
  </div>
  

 <div className="banner-bg row">
  <div className="col-md-6">
    <img
        className="img-fluid mb-3"
            style={{ marginTop: "-35px" }}
      src='/images/cms.webp'
      
      
    />
  </div>
  <div className="col-md-6 mt-5">
    <div className="container">
      <h1 className='banner-title'>Fair prices with<br />valuable designs</h1>
      <p className='banner-description'>Catchy bag company taglines create a difference among
        opponents in the eye of the audience and help to engage customers towards the brand.</p>
 </div>
  </div>
</div>



<div className="banner-bg position-relative">
  <div className="container">
  <div className="row">
    <div className="col-md-9">
  
        <h1 className='banner-title'>Designs that fit everything</h1>
        <p className='banner-description'>It could reflect a business’s goals and personalities through the strong tagline, and customers usually remember the catchy taglines and attract them.</p>
   

      <div className="row" >

     
             <div style={{ margin: "1em" }}>

          <input
            type="radio"
            className="m-1"
            id="bag-radio"
            name="pcategory"
            value="wallet"
            onChange={() => handleCatChange('wallet')}
         
          />

                    <label htmlFor="bag-radio">Wallet</label>
          
          <input
            type="radio"
            id="watch-radio"
             className="m-1"
            name="pcategory"
            value="bags"
            onChange={() => handleCatChange('bags')}
      
          />

          <label htmlFor="bag-radio">Bag</label>
          
          <input
            type="radio"
            id="watch-radio"
             className="m-1"
            name="pcategory"
            value="belt"

        onChange={() => handleCatChange('belt')}      
          />
          <label htmlFor="watch-radio">Belts</label>


          <input
            type="radio"
            id="watch-radio"
             className="m-1"
            name="pcategory"
            value="backpack"
            onChange={() => handleCatChange('backpack')}
      
          />
          <label htmlFor="watch-radio">BagPack</label>
        </div>
        {items?.slice(0, 3).map(product => (
              <div className="product-wrapper mx-auto col-md-4 mb-3 mt-3 ">
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

    <div className="col-md-3 position-absolute bottom-0 p-5  end-0 d-flex justify-content-end hiddendiv">
      <img
        src='/images/right.webp'
        className="img-fluid "
        alt="Banner Image"
      />
    </div>
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
  <div className="col-md-4 ">
    <div className='banner_contents mt-5 container'>
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



<div className="banner-bg">
<div className="container">

  

 <div className="row">
         <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
        {storeProducts.slice(0, 4).map(product => (
              <div className="product-wrapper mx-auto col-md-3 mt-3">
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
  <div className="row mt-5 container">
     <h1 className='banner-title'>Categories</h1>
        <p className='banner-description'>It could reflect a business’s goals and personalities through the strong tagline, and customers usually remember the catchy taglines and attract them.</p>
   

<Category />
</div>

</div>
</div>


<div className="banner-container">
<div className="container">

  <div className="banner-header">
    <h1 className='banner_title'><ImQuotesLeft/></h1>
    <h6 className='banner_title'>Testimonials</h6>
  </div>


  <h3 className='b-title mb-5'>I have found the perfect blend of style and functionality in this Brown Leather Backpack. 
  As a busy professional, I needed a bag that could hold all my essentials while still looking
   polished and professional.</h3>

  <div className="customer-info mt-5">
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
</div>
        
  
    </>
  )
}