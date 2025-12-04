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
import AboutUs from './SubComponent/AboutUs';
import Careers from './SubComponent/Career';
import Cart from './SubComponent/Cart';
import ContactUs from './SubComponent/ContactUs';
import FAQs from './SubComponent/FAQs';
import MyAccount from './SubComponent/MyAccount';
import OffersDiscounts from './SubComponent/Offers';
import TrackOrder from './SubComponent/Ordertracking';
import PrivacyPolicy from './SubComponent/PrivacyPolicy';
import ReturnRefundPolicy from './SubComponent/ReturnPolicy';
import ShippingInfo from './SubComponent/ShippingInfo';
import SizeGuide from './SubComponent/SizeGuide';
import Terms from './SubComponent/Terms';
import WarrantyClaims from './SubComponent/Warranty';
import Wishlist from './SubComponent/Wishlist';
<<<<<<< Updated upstream
<<<<<<< Updated upstream

=======
import FeaturedAth from './Components/FeaturedAth';
import TennisBats from './SinglePages/TennisBats';
import AllTennisBats from './SinglePages/AllTennisBats';
>>>>>>> Stashed changes
=======
import FeaturedAth from './Components/FeaturedAth';
import TennisBats from './SinglePages/TennisBats';
import AllTennisBats from './SinglePages/AllTennisBats';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream

=======
        <Route path="/featureAthlete" element={<FeaturedAth/>}/>
      <Route path="/tennisbats" element={<TennisBats/>}/>
      <Route path="/alltennisbats" element={<AllTennisBats/>}/>
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

        {/* Register Routes */}
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Login" element={<Login/>}/>

        {/* Sub Components of footer */}
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/Career" element={<Careers/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/BBS/contactUs" element={<ContactUs/>}/>
      <Route path="/FAQs" element={<FAQs/>}/>
      <Route path="/BBS/MyAccount" element={<MyAccount/>}/>
      <Route path="/Offers" element={<OffersDiscounts/>}/>
      <Route path="/OrderTracking" element={<TrackOrder/>}/>
      <Route path="/Privacy&Policy" element={<PrivacyPolicy/>}/>
      <Route path="/ReturnPolicies" element={<ReturnRefundPolicy/>}/>
      <Route path="/ShippingInfo" element={<ShippingInfo/>}/>
      <Route path="/Guide" element={<SizeGuide/>}/>
      <Route path="/Terms" element={<Terms/>}/>
      <Route path="/Warranty" element={<WarrantyClaims/>}/>
      <Route path="/Wishlist" element={<Wishlist/>}/>

      <Route/>
       </Routes>
    <Footer/>
    
    </>
  )
}

export default App
