import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext';
import { AllBats } from '../Components/ProductList';
import { Link } from 'react-router-dom'
import SubHeader from '../context/SubHeader';


const Bats = () => {
  const { addToCart } = useContext(CartContext);
    
  return (
    <>

       <div className="grid grid-cols-1 mt-32 sm:grid-cols-2 md:grid-cols-4 gap-8">
         {/* <SubHeader/> */}
          
        {AllBats.map((item) => (
          <div>
  <Link key={item.id} to={item.link}>
    <div className="p-4 rounded-xl hover:scale-105 transition">
      <img src={item.img} alt={item.title} className="w-68 h-80 rounded-xl" />
      <h1 className="text-start mt-2 ml-2 font-semibold text-xl">{item.title}</h1>
      <h2 className="text-start mt-2 ml-2 font-semibold text-xl">{item.price}</h2>
    </div>
  
       <button
            className="mt-3 mb-40 ml-8 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
            More Details
          </button>
          </Link>
          </div>
))}
</div> 

    </>
  )
}

export default Bats
