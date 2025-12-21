import React from 'react'
import {AllPads} from '../Components/ProductList'
import { Link } from 'react-router-dom';
import SubHeader from '../context/SubHeader';

const Pads = () => {

    return (
    <>
     <div>
       <SubHeader/>
    </div>
       <div className="grid grid-cols-1 mt-24 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {AllPads.map((item) => (
  <Link key={item.id} to={item.link}>
    <div className="p-4 rounded-xl hover:scale-105 transition">
      <img src={item.img} alt={item.title} className="w-full h-72 rounded-xl" />
      <h1 className="mt-2 font-semibold text-xl">{item.title}</h1>
      <h1 className="mt-2 font-semibold text-xl">{item.price}</h1>
    </div>
  <button
            className="mt-3 mb-40 ml-8 bg-blue-600 h-12 w-40 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
            More Details
          </button>
  </Link>

))}

</div>

    </>
  )
}

export default Pads
