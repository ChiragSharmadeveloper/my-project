import React from 'react'
import './App.css'
import {Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Product from './Components/Product';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
 
  return (
    <>  

<Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/products" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer/>

    
       {/* <Contact/>  */}

       {/* <Header/> 
       <Banner/>
       <Product/>*/}
    </>
  )
}

export default App
