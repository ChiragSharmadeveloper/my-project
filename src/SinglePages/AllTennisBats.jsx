import { React, useState } from 'react'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from 'react-router-dom'
import { batimages } from '../Components/ProductList';
import bat1 from '../image/bat4.jpg'             //images for main product pages 
import bat2 from '../image/bat2.jpg'         
import bat3 from '../image/bat3.jpg'
import bat4 from '../image/bat5.jpg'

const AllTennisBats = () => {
    const {addToCart} = useContext(CartContext);
    const [mainImage, setMainImage] = useState(batimages[0]);

  return (
    <>

       <div className="w-full max-w-md mx-auto m-36">
      {/* Main Image */}
      <div className="mb-4">
        <img
          src={mainImage}
          alt="Main"
          className="w-full h-88 object-cover rounded-lg shadow-md"
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
            className={`w-24 h-24 object-cover rounded-lg cursor-pointer border 
              ${mainImage === img ? "border-blue-500" : "border-gray-300"} 
              hover:scale-105 transition`}
          />
<button
            onClick={() => addToCart(index)}
            className="mt-3 mb-40 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
          >
            Add to Cart
          </button>
          </div>
        ))}
       
      </div>
      
    </div>
    </>
  )
}

export default AllTennisBats
