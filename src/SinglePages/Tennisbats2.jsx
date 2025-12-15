import React, { useState, useContext } from 'react'
import { CartContext } from "../context/CartContext";

const Tennisbats2 = () => {
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
      
    </>
  )
}

export default Tennisbats2
