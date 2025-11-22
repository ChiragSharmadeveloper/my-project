import React from 'react'


const Footer = () => {
  return (
    <>
       {/* FOOTER */}
      <footer className="bg-black text-white p-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          
          <div className='flex text-center gap-44'> 
          <ul className='leading-9 text-lg font-semibold'>
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>

          <ul className='leading-9 text-lg font-semibold'>
            <li>Track Order</li>
            <li>Return & Refund Policy</li>
            <li>Shipping Information</li>
            <li>FAQs</li>
            <li>Warranty Claims</li>
          </ul>

          <ul className='ml-72 leading-9 text-lg font-semibold'>
            <li>My Account</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Offers & Discounts</li>
            <li>Size Guide</li>
          </ul>
          </div>
    {/*  Company name and details */}
          <p className='mt-16 text-lg font-semibold'>® 2022 — All Rights Reserved</p>
          <p className=' text-lg font-semibold'>Email: babitasports5@gmail.com | Phone: +91 9997270808 </p>
          <p className='text-4xl font-semibold'>© BABITA BHARDWAJ SPORTS </p>

        </div>
      </footer>
  </>
  )
}
  

export default Footer
