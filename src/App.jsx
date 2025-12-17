import React from 'react'
import './App.css'
import {BrowserRouter, Link, Routes, Route } from "react-router-dom";
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
// import Cart from './SubComponent/Cart1';
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
import Wishlist from './SubComponent/Wishlist'
import FeaturedAth from './Components/FeaturedAth';
// import TennisBats from './SinglePages/TennisBats';
// import AllTennisBats from './SinglePages/AllTennisBats';
import { CartProvider } from "./context/CartContext";
import Cart from './Components/Cart';
import SubHeader from './context/SubHeader';
import ScoopTennis from './SinglePages/TennisBats/ScoopTennis';
import BlackMamba from './SinglePages/TennisBats/BlackMamba';
import AK47Tennis from './SinglePages/TennisBats/AK47Tennis';
import SingleBlade from './SinglePages/TennisBats/SingleBlade';
import DoubleBlade from './SinglePages/TennisBats/DoubleBlade';
import KWBat from './SinglePages/LeatherBats/KWBat';
import RK06 from './SinglePages/LeatherBats/RK06';
import KB26Bat from './SinglePages/LeatherBats/KB26Bat';
import BB20 from './SinglePages/LeatherBats/BB20';
import MS19 from './SinglePages/LeatherBats/MS19';
import SS25 from './SinglePages/LeatherBats/SS25';
import RJ14 from './SinglePages/LeatherBats/RJ14';


function App() {
 
  return (

    <>  

    <CartProvider>
<Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
       <Route path="/products" element={<Product />} /> 
       <Route path="/contact" element={<Contact />} /> 
       <Route path="/checkout" element={<Cart/>}/>
        <Route path="/products/bats" element={<Bats/>}/>
        <Route path="/products/balls" element={<Balls/>}/> 
        <Route path="/products/pads" element={<Pads/>}/> 
        <Route path="/products/gloves" element={<Gloves/>}/> 
        <Route path="/products/kitbags" element={<KitBags/>}/> 
        <Route path="/products/guards" element={<Guards/>}/> 
        <Route path="/products/clothing" element={<Clothing/>}/>
        <Route path="/products/accessories" element={<Accessories/>}/> 
        <Route path="/featureAthlete" element={<FeaturedAth/>}/>
      {/* <Route path="/tennisbats" element={<TennisBats/>}/> */}
      <Route path="/scooptennis" element={<ScoopTennis/>}/>
      <Route path="/blackmamba" element={<BlackMamba/>}/>
      <Route path="/ak47tennis" element={<AK47Tennis/>}/>
      <Route path="/singleblade" element={<SingleBlade/>}/>
      <Route path="doubleblade" element={<DoubleBlade/>}/>
      <Route path="/kwbat" element={<KWBat/>}/>
      <Route path="/rk06" element={<RK06/>}/>
      <Route path="/kb26" element={<KB26Bat/>}/>
      <Route path="/bb20" element={<BB20/>}/>
      <Route path="/ms19" element={<MS19/>}/>
      <Route path="/ss25" element={<SS25/>}/>
      <Route path="/rj14" element={<RJ14/>}/>            
      {/* Sub Header      */}
      {/* for importing in every in every product  */}
      <Route path='/product/SubHeader' element={<SubHeader/>}/>    

        {/* Register Routes */}
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Login" element={<Login/>}/>


        {/* Sub Components of footer */}
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/Career" element={<Careers/>}/>
      {/* <Route path="/Cart" element={<Cart1/>}/> */}
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
    </CartProvider>
    </>
  )
}

export default App
