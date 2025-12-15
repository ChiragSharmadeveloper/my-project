import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom'
import { AllBalls } from '../Components/ProductList';


const Balls = () => {
      const { addToCart } = useContext(CartContext);

  return (
    <>
    <div className="grid grid-cols-1 mt-24 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {AllBalls.map((item) => (
              <div>
      <Link key={item.id} to={item.link}>
        <div className="p-4 rounded-xl hover:scale-105 transition">
          <img src={item.img} alt={item.title} className="w-full h-72 rounded-xl" />
          <h1 className=" mt-2 font-semibold text-2xl">{item.title}</h1>
          <h1 className=" mt-2 font-semibold text-2xl">{item.price}</h1>
        </div>
      </Link>
      <button
            onClick={() => addToCart(item)}
            className="h-12 w-40 mt-3 mb-40 ml-8 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
            Add to Cart
          </button>
      </div>
    ))}
    </div> 
      
    </>
  )
}

export default Balls
