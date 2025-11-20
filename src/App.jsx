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
import Pads from './Pages/Pads';
import Gloves from './Pages/Gloves';
import KitBags from './Pages/KitBags';
import Guards from './Pages/Guards';
import Clothing from './Pages/Clothing';
import Accessories from './Pages/Accessories';
import Login from './Register/logIn';
import Register from './Register/signUp';


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
        <Route path="/products/pads" element={<Pads/>}/> 
        <Route path="/products/gloves" element={<Gloves/>}/> 
        <Route path="/products/kitbags" element={<KitBags/>}/> 
        <Route path="/products/guards" element={<Guards/>}/> 
        <Route path="/products/clothing" element={<Clothing/>}/>
        <Route path="/products/accessories" element={<Accessories/>}/> 
    </Routes>
    <Footer/>



        {/* Register Routes */}
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Login" element={<Login/>}/>
     </Routes>   
    <Footer/>



    </>
  )
}

export default App
