import React from 'react'
import './App.css'
import {Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Product from './Components/Product';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Login  from './Register/logIn';
import Register  from './Register/signUp';



function App() {
 
  return (
    <>  

<Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Product />} />
      <Route path="/contact" element={<Contact />} />

    {/* Register */}
    <Route path="/login" element={<Login />}/>
    <Route path="/signup" element={<Register />}/>



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
