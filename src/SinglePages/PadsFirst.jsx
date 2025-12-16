import React, { useState, useContext } from 'react'
import { CartContext } from "../context/CartContext";

const PadsFirst = () => {
    const { addToCart } = useContext(CartContext);
    const [mainImage, setMainImage] = useState(padImages[0]);
    
  return (
    <>
      
    </>
  )
}

export default PadsFirst
