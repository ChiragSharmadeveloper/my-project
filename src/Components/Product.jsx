import React from "react";
import { Link } from 'react-router-dom'
import { productlist1 } from "./ProductList";

const Product = () => {

  return (
    <>

      {/* PRODUCT CARDS */}
      <section id="products" className="py-20 max-w-7xl mx-auto w-sm-[300px] w-md-[500px] w-lg-full px-6">
        <ul className="mt-2 flex flex-wrap gap-4 p-1 pl-2 font-bold text-black bg-gray-300 rounded-xl
                w-full
                sm:gap-4 sm:pl-2
                md:gap-10 md:pl-6
                lg:gap-22 lg:pl-6 lg:w-[1200px] mb-2.5 " >
        <Link to="/products/bats" className="hover:text-red-500"><li>Bats</li></Link>
        <Link to="/products/pads" className="hover:text-red-500"><li>Cricket Pads</li></Link>
        <Link to="/products/gloves" className="hover:text-red-500"><li>Gloves</li></Link>
        <Link to="/products/kitbags" className="hover:text-red-500"><li>Kit Bags</li></Link>
        <Link to="/products/balls" className="hover:text-red-500"><li>Balls</li></Link>
        <Link to="/products/guards" className="hover:text-red-500"><li>All Guards</li></Link>
        <Link to="/products/clothing" className="hover:text-red-500"><li>clothing</li></Link>
        <Link to="/products/accessories" className="hover:text-red-500"><li>Accessories</li></Link>
        </ul>

        <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {productlist1.map((item) => (
         <Link key={item.id} to={item.link}>
       <div className="bg-white rounded-lg p-4 hover:scale-105  transition cursor-pointer">
              <img className="w-full h-72 object-cover rounded" src={item.img} />
              <h3 className="mt-3 font-semibold text-xl">{item.title}</h3>
              <h3 className="mt-3 font-semibold text-xl">{item.price}</h3>
            </div>
            </Link> 
          ))}
        </div>

      </section> 
      
    </>
  )
}

export default Product
