import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">MyStore</h1>

            <ul className="hidden md:flex space-x-8 gap-24 font-bold text-lg">
              
      <Link to="/"><li className="hover:text-blue-600">Home</li></Link>
      <li className="hover:text-blue-600">Services</li>
      <Link to="/products"><li className="hover:text-blue-600">Products</li></Link>
      <Link to="/contact"><li className="hover:text-blue-600">Contact</li></Link>
          </ul>

          {/* Profile Dropdown */}
          <div className="relative group">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
              <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" className="w-7" />
            </button>
            <div className="absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-md p-2 hidden group-hover:block">
              <a className="block px-3 py-2 hover:bg-gray-100 rounded" href="#login">Login</a>
              <a className="block px-3 py-2 hover:bg-gray-100 rounded" href="#signup">Sign Up</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
