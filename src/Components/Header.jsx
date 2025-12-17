import React, { useContext } from 'react'
import { useState } from 'react'
import { RiShoppingCart2Line } from "react-icons/ri";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import BBS from "../assets/Mainlogo.png"
import logIN from"../assets/login.jpeg"

const Header = ({totalCount}) => {
const [open,setOpen]=useState(false);
const totalCount1 = useContext(CartContext).totalCount1;


  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-2 py-2 flex justify-between items-center">

           {/* ✅ LOGO SECTION - UPDATED CSS */}
        <div className="flex items-center">
          <Link to="/"
           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img
              src={BBS}
              alt="Logo"
              // 🖼️ MODIFIED CSS: Removed 'rounded-xl' and 'shadow-lg' to ensure transparency 
              // and prevent background bleed. The size is kept as you requested.
              className=" h-12 w-12 sm:h-12 sm:w-12 md:h-12 md:w-12 lg:h-16 lg:w-16 xl:h-16 xl:w-16 object-contain mr-3 hover:scale-110 transition duration-300 "
            />
          </Link>
        </div>

            <ul className="hidden md:flex space-x-8 gap-24 font-bold text-lg">
              
      <Link to="/"><li className="hover:text-blue-600">Home</li></Link>
    <Link to="/services">  <li className="hover:text-blue-600">Services</li></Link>
      <Link to="/products"><li className="hover:text-blue-600">Featured Products</li></Link>
      <Link to="/contact"><li className="hover:text-blue-600">Contact</li></Link>
            
    <Link to="/checkout" className='rounded-2xl'>  <RiShoppingCart2Line  className='text-3xl'/> <span  className="absolute flex items-center justify-center -top-1 mt-8 ml-8  text-black text-xl w-5 h-5">{totalCount1}</span>  </Link>
          </ul>

          {/* Profile Dropdown */}
          <div className="relative">
  {/* Profile Button */}
  <button
    onClick={() => setOpen(!open)}
    className="p-1 rounded-full transition"
  >
    <img
      src={logIN}
      className="w-16"
    />
  </button>

  {/* Dropdown (OnClick Only) */}
  {open && (
    <div className="absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-md p-2 z-50">
      <Link
        to="/login"
        className="block px-3 py-2 hover:bg-gray-100 rounded"
      >
        Login
      </Link>

      <Link
        to="/Register"
        className="block px-3 py-2 hover:bg-gray-100 rounded"
      >
        Sign Up
      </Link>
    </div>
  )}
</div>
        </div>
      </nav>
    </>
  )
}

export default Header
