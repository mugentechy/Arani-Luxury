import jumboData from '../utils/about.json';
import '../assets/jumbo.css';
import { IoArrowBack } from "react-icons/io5";
import { Card } from 'react-bootstrap';
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineVerified } from "react-icons/md";
import { CiPhone } from "react-icons/ci";

export default function About() {
  return (
    <>
 <header className='banner'>
       <div className="container">
<IoArrowBack /> Back to Home
<h1 className="h-title margin-top">About Us</h1>
<h2 className="subtitle margin-top">At AboutUs, we are a dynamic and innovative company committed 
to providing<br /> comprehensive information and valuable insights on a wide range of topics.  </h2>
</div>
    </header>

    <div className="container">
     <h1 className="title">Crafting Timeless Bags for Modern Lifestyles</h1>
     <div className="row">
     <div className="col-6">
      
            <h2 className="subtitle">At our core, we believe that a bag is more than just a functional item; it is an expression of personal style, a reflection of individuality, and a statement of confidence. We are dedicated to curating a collection of bags that not only meet the highest
             standards of quality and craftsmanship but also resonate with our customers on a deeper level.</h2>
          </div>
          <div className="col-6">
            
            <h2 className="subtitle">Our team is composed of fashion enthusiasts, trendsetters, and dedicated individuals who share a love for all things bags. We carefully select each item in our collection, focusing on design aesthetics, versatility, and enduring appeal. From classic to contemporary, minimalist to bold,
             our range encompasses a diverse array of styles to cater to every taste and occasion.</h2>
          </div>
</div>

  <h1 className="title">Elevating Bag Design</h1>
      {jumboData.map((item) => (
        <div key={item.id} className={`row ${item.direction === 'row-reverse' ? 'flex-row-reverse' : ''}`}>
          <div className="col-6">
            <h1 className="title">{item.title}</h1>
            <h2 className="subtitle">{item.subTitle}</h2>
          </div>
          <div className="col-6">
            <img className="image" src={item.image} alt={item.alt} />
          </div>
        </div>
      ))}
    </div>
        <div className="container">
    <h1 className="title">About our shop</h1>
 
<div className="row margin-top margin-bottom">
               <Card className='col-4' style={{ background: "white",color:"black" }}>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div className="star-rating">Fast delivery</div>
                <small><CiDeliveryTruck /></small>
              </div>
       
              <Card.Text>The specific delivery time will vary depending on the shipping address and the selected delivery option. 
              Customers can track their order online to see the estimated delivery date.</Card.Text>
         
            </Card.Body>
          </Card>

                   <Card className='col-4' style={{ background: "white",color:"black"}}>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div className="star-rating">Many Offers</div>
                <small><MdOutlineVerified /></small>
              </div>
       
              <Card.Text>The specific delivery time will vary depending on the shipping address and the selected delivery option. 
              Customers can track their order online to see the estimated delivery date.</Card.Text>
         
            </Card.Body>
          </Card>



                   <Card className='col-4' style={{ background: "white",color:"black" }}>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div className="star-rating">24/7 support</div>
                <small><CiPhone /></small>
              </div>
       
              <Card.Text>CMS Service support is available 24 hours a day, 7 days a week.
               You can reach them by phone, email, or chat. Here are the contact information for CMS Service support.</Card.Text>
         
            </Card.Body>
          </Card>


</div>
     </div>
    </>
  );
}
