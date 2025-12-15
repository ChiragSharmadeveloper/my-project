import React, { useState, useContext } from 'react'
import { CartContext } from "../context/CartContext";
import { batimages } from '../Components/ProductList';
import SubHeader from '../context/SubHeader';


const AllTennisBats = () => {

  const { addToCart } = useContext(CartContext);
  const [mainImage, setMainImage] = useState(batimages[0]);

  const product = {
    id: 101,
    name: "Tennis Bat",
    price: 1499,
    img: mainImage,
    quantity: 1,
  };

  return (
    <>
    {/* <SubHeader/> */}

     <div className="w-full max-w-md m-36">
      
      {/* Main Image */}
      <div className="mb-4">
        <img
          src={mainImage}
          alt="Main"
          className="w-full h-92 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex justify-between gap-4">
        {batimages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Thumbnail"
            onClick={() => setMainImage(img)}
            className={`w-32 h-32 object-cover rounded-lg cursor-pointer border 
              ${mainImage === img ? "border-blue-500" : "border-gray-300"} 
              hover:scale-105 transition`}
          />
        ))}
      </div>

      {/* Add to Cart */}
      <button
        onClick={() => addToCart(product)}
        className="mt-8 mb-40 ml-28 bg-blue-600 text-white px-4 py-2 rounded-xl h-12 w-60 font-semibold text-2xl hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>

    </>
  )
}

export default AllTennisBats
