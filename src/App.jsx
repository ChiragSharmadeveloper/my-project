import React from 'react'
import './App.css'
import {Routes, Route } from "react-router-dom";
import Product from './Components/Product';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Bats from './Pages/Bats';
import Services from './Components/Services';
import Balls from './Pages/Balls';
import  from './Components/Footer';


function App() {
 
  return (
    <>  

<Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
       <Route path="/products" element={<Product />} /> 
       <Route path="/contact" element={<Contact />} /> 
        <Route path="/products/bats" element={<Bats/>}/>
        <Route path="/products/balls" element={<Balls/>}/> 
     </Routes>   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Product />} />
      <Route path="/contact" element={<Contact />} />


      {/* Register */}
    <Route path="/LogIn" element={<login />}/>
 
 
 
    </Routes>
    <Footer/>





   <Footer/> 

    </>
  )
}

export default App
