import React, { useState, useContext } from 'react'
import { CartContext } from "../../context/CartContext";
import { batimages } from '../../Components/ProductList';

const BlackMamba = () => {
    const { addToCart } = useContext(CartContext);
    const [mainImage, setMainImage] = useState(batimages[0]);

    const product = {
    id: 1002,
    title: "Black Mamba Hard Tennis Bat",
    price: 3000,
    img: mainImage,
    productDetails:" Lightweight kashmir willow Cricket Bat for all catogery " ,
  };

  return (
    <>

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
              {batimages.slice(1).map((img, index) => (
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

          </div>
          
          <div className=''>
              <h1 className='text-xl font-semibold'>{product.title}</h1>
              <h1 className='text-xl font-semibold'>{product.price}</h1>
              <h1 className='text-xl font-semibold'>{product.productDetails}</h1>


              {/* Add to Cart */}
            <button
              onClick={() => addToCart(product)}
              className="mt-8 ml-28 hover:bg-blue-600 text-black rounded-xl h-12 w-60 font-semibold text-xl bg-yellow-500"
            >
              Add to Cart
            </button>
            </div>

    </>
  )
}

export default BlackMamba
