import React from 'react';
import  Home  from './pages/home'
import {  Nav } from './components'
import Footer from './components/footer'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Details from "./components/Details";
import Shop from "./components/shop";
import About from "./components/About";
import Delivery from "./components/delivery";
import Contact from "./components/Contact";
import Cart from "./components/cart";
import './app.css'

export default function App() {

  return (
    <>
     <BrowserRouter>
     <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/gallery" element={<Shop />} />
          <Route path="/details" element={<Details />} />
          <Route path="/delivery" element={<Delivery />} />
              <Route path="/about" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
               <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      </>

  ) 
}