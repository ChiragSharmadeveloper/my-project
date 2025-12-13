import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext';
import { AllBats } from '../Components/ProductList';
import { Link } from 'react-router-dom'


const Bats = () => {
  const { addToCart } = useContext(CartContext);

    
  return (
    <>
      
       <div className="grid grid-cols-1 mt-24 sm:grid-cols-2 md:grid-cols-4 gap-8">
           <ul className="mt-2 flex flex-wrap gap-4 p-1 pl-2 font-bold text-black bg-gray-300 rounded-xl
                w-full
                sm:gap-4 sm:pl-2
                md:gap-10 md:pl-6
                lg:gap-22 lg:pl-6 lg:w-[1200px] mb-2.5 fixed z-1000" >
        <Link to="/products/bats" className="hover:text-red-500"><li>Bats</li></Link>
        <Link to="/products/pads" className="hover:text-red-500"><li>Cricket Pads</li></Link>
        <Link to="/products/gloves" className="hover:text-red-500"><li>Gloves</li></Link>
        <Link to="/products/kitbags" className="hover:text-red-500"><li>Kit Bags</li></Link>
        <Link to="/products/balls" className="hover:text-red-500"><li>Balls</li></Link>
        <Link to="/products/guards" className="hover:text-red-500"><li>All Guards</li></Link>
        <Link to="/products/clothing" className="hover:text-red-500"><li>clothing</li></Link>
        <Link to="/products/accessories" className="hover:text-red-500"><li>Accessories</li></Link>
        </ul>

        {AllBats.map((item) => (
          <div>
  <Link key={item.id} to={item.link}>
    <div className="p-4 rounded-xl hover:scale-105 transition">
      <img src={item.img} alt={item.title} className="w-68 h-80 rounded-xl" />
      <h1 className="text-start mt-2 ml-2 font-semibold text-xl">{item.title}</h1>
      <h2 className="text-start mt-2 ml-2 font-semibold text-xl">{item.price}</h2>
    </div>
  </Link>
  <button
            onClick={() => addToCart(item)}
            className="mt-3 mb-40 ml-8 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
            Add to Cart
          </button>
          </div>
))}
</div> 

    </>
  )
}

export default Bats
