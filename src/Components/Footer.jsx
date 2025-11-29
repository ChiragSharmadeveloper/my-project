import React from 'react'
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
       {/* FOOTER */}

      <footer className="bg-black text-white p-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center"
         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          
          <div className='flex text-center gap-44'> 
          <ul className='leading-9 text-lg font-semibold'>
            <Link to="/"><li>About Us</li></Link>
            <Link to="/"><li>Careers</li></Link>
            <Link to="/"><li>Contact Us</li></Link>
            <Link to="/"><li>Privacy Policy</li></Link>
            <Link to="/"><li>Terms & Conditions</li></Link>
          </ul>

          <ul className='leading-9 text-lg font-semibold'>
            <Link to="/"><li>Track Order</li></Link>
            <Link to="/"><li>Return & Refund Policy</li></Link>
            <Link to="/"><li>Shipping Information</li></Link>
            <Link to="/"><li>FAQs</li></Link>
            <Link to="/"><li>Warranty Claims</li></Link>
          </ul>

          <ul className='ml-72 leading-9 text-lg font-semibold'>
            <Link to="/"><li>My Account</li></Link>
            <Link to="/"><li>Cart</li></Link>
            <Link to="/"><li>Wishlist</li></Link>
            <Link to="/"><li>Offers & Discounts</li></Link>
            <Link to="/"><li>Size Guide</li></Link>
          </ul>
          </div>

    {/*  Company name and details */}
         <Link to="/" >
          <p className='mt-16 text-lg font-semibold'>® 2022 — All Rights Reserved</p>
          <p className=' text-lg font-semibold'>Email: babitasports5@gmail.com | Phone: +91 9997270808 </p>
          <p className='text-4xl font-semibold'>© BABITA BHARDWAJ SPORTS </p></Link>
        </div>
      </footer>
      
  </>
  )
}
  

export default Footer
