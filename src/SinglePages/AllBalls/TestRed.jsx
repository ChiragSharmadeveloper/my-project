import React, { useState, useContext } from 'react'
import { CartContext } from "../../context/CartContext";
import {Link } from 'react-router-dom'
import {ballimages} from '../../Components/ProductList';
import ball1 from '../../image/ball.jpg';

const TestRed = () => {

    const { addToCart } = useContext(CartContext);
    const [mainImage, setMainImage] = useState(ballimages[0]);
    
     const product = {
        id: 1002,
        title: "KW Leather Bats",
        price: 4500,
        img: mainImage,
        productDetails:" Lightweight kashmir willow Cricket Bat for all catogery " ,
      };

  return (
    <>
    <div className='flex'>
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
                              {ballimages.slice(1).map((img, index) => (
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
    
                          <div className='mt-32 w-[40%] mr-5 text-start space-y-3'>
            <h1 className='text-3xl  font-bold '>{product.title}</h1>
            <h1 className='text-3xl font-bold  '>{product.productDetails}</h1>
            <h1 className='text-4xl font-bold text-red-500'> ₹ {product.price}</h1>
    
             {/* Add to Cart */}
          <button
            onClick={() => addToCart(product)}
            className="mt-8 ml-28 hover:bg-blue-600 text-black rounded-xl mb-7 h-12 w-80 font-semibold text-xl bg-yellow-500">
            Buy Now
          </button>
    
            {/* <h1 className='text-xl font-semibold'>{product.label[0]}</h1> */}
            <h1 className='text-xl '>{product.about}</h1>
          </div>
                          
             </div>             
          
                            <div className='flex  gap-20 mt-20 mx-[450px]'>
                       <Link to="/blackmamba"><img src={ball1} alt={product.title} className='w-36 gap-20 h-32 rounded-lg cursor-pointer hover:scale-105 transition' /></Link>
                       <Link to="/singleblade"><img src={ball1} alt={product.title} className='w-36 gap-20 h-32 rounded-lg cursor-pointer hover:scale-105 transition' /></Link>
                       <Link to="/doubleblade"><img src={ball1} alt={product.title} className='w-36 gap-20 h-32 rounded-lg cursor-pointer hover:scale-105 transition' /></Link>
                          </div>
    </>
  )
}

export default TestRed
