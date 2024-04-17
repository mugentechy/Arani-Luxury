import React from 'react'
import { createRoot } from 'react-dom/client';
import 'normalize.css'
import App from './app'

import { ToastContainer } from 'react-toastify';

import { ProductProvider } from "./context";
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
      <ProductProvider>
      <ToastContainer />
      <div className="contain">
       <App /> 
       </div>
       </ProductProvider>
  
     

)
