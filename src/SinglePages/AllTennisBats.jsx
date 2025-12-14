import { React, useState } from 'react'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from 'react-router-dom'
import { batimages } from '../Components/ProductList';
import SubHeader from '../context/SubHeader';


const AllTennisBats = () => {
    const {addToCart} = useContext(CartContext);
    const [mainImage, setMainImage] = useState(batimages[0]);

  return (
    <>
    {/* <SubHeader/> */}

       <div className=" flex mt-28 mx-auto p-16 w-full mb-80">
      
{/* Left Div */}
      <div className=' w-full h-80 mr-4'>                
        {/* Main Image */}
      <div className="mb-4">
        <img
          src={mainImage}
          alt="Main"
          className="w-full h-92 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex justify-between gap-4">
        {batimages.slice(1).map((img, index) => (
          <div>
          <img
            key={index}
            src={img}
            alt="Thumbnail"
            onClick={() => setMainImage(img)}
            className={`w-32 h-32 object-cover rounded-lg cursor-pointer border 
              ${mainImage === img ? "border-blue-500" : "border-gray-300"} 
              hover:scale-105 transition`}
          />
          </div>
        ))}  
      </div>
      </div> 

      {/* Right Div */}
      <div className=''>
        {/* description */}
        <div>
          <h1></h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos quod eveniet modi ullam vel? Sapiente recusandae soluta beatae doloremque, voluptatum hic nostrum commodi voluptate reprehenderit, itaque eos! Voluptatum, odio ipsam?</p>
        </div>
        {/*  add to cart div */}
      <div>
        <button
            onClick={() => addToCart(index)}
            className="mt-3 mb-40 pl-24 pr-24 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 " >
            Add to Cart
          </button>

       </div>
      </div>

    </div>
    </>
  )
}

export default AllTennisBats
