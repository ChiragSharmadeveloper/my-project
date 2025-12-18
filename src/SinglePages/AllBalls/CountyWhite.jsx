import React, { useState, useContext } from 'react'
import { CartContext } from "../../context/CartContext";
import {Link } from 'react-router-dom'
import {ballimages} from '../../Components/ProductList';
import ball1 from '../../image/ball.jpg';

const CountyWhite = () => {

    const { addToCart } = useContext(CartContext);
                            const [mainImage, setMainImage] = useState(ballimages[0]);
                            
                             const product = {
                                id: 1006,
                                title: "KW Leather Bats",
                                price: 4500,
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
                                    
                                                      <div className='flex  gap-20 mt-20 mx-[450px]'>
                                                 <Link to="/blackmamba"><img src={ball1} alt={product.title} className='w-36 gap-20 h-32 rounded-lg cursor-pointer hover:scale-105 transition' /></Link>
                                                 <Link to="/singleblade"><img src={ball1} alt={product.title} className='w-36 gap-20 h-32 rounded-lg cursor-pointer hover:scale-105 transition' /></Link>
                                                 <Link to="/doubleblade"><img src={ball1} alt={product.title} className='w-36 gap-20 h-32 rounded-lg cursor-pointer hover:scale-105 transition' /></Link>
                                                    </div>
                                                    
    </>
  )
}

export default CountyWhite
