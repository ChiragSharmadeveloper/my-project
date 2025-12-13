import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from 'react-router-dom'
import bat1 from '../image/bat4.jpg'
import pad1 from '../image/whitePads.jpg'
import gloves1 from '../image/gloves1.jpg'
import bag1 from '../image/bag4.jpg'
import ball1 from '../image/ball.jpg'
import guard1 from '../image/gloves1.jpg'
import clothing1 from '../image/clothing1.webp'
import accessories1 from '../image/G2.jpg'
import { productlist1 } from "./ProductList";

const Product = () => {
  const {addToCart} = useContext(CartContext);

    const Products = [  
          {
            id:1,
            title:"Bats",
            img:bat1,
            price:"2000",
            link:"/products/bats",
          },
          {
            id:2,
            title:"Cricket Pads",
            img:pad1,
            price:"2000",
            link:"/products/pads",
          },
          {
            id:3,
            title:"Gloves",
            img:gloves1,
            price:"2000",
            link:"/products/gloves",
          },
          {
            id:4,
            title:"Kit Bags",
            img:bag1,
            price:"2000",
            link:"/products/kitbags",
          },
          {
            id:5,
            title:"Balls",
            price:"2000",
            img:ball1,
            link:"/products/balls",
          },
          {
            id:6,
            title:"All Guards",
            img:guard1,
            price:"2000",
            link:"/products/guards",
          },
          {
            id:7,
            title:"Clothing",
            img:clothing1,
            price:"2000",
            link:"/products/clothing",
          },
          {
            id:8,
            title:"Accessories",
            img:accessories1,
            price:"2000",
            link:"/products/accessories",
          },
        ]

  return (
    <>

      {/* PRODUCT CARDS */}
      <section id="products" className="py-20 max-w-7xl mx-auto w-sm-[300px] w-md-[500px] w-lg-full px-6">
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

        <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {productlist1.map((item) => (
            <div>
         <Link key={item.id} to={item.link}>
       <div className="bg-white rounded-lg p-4 hover:scale-105  transition cursor-pointer"
            >
              <img className="w-full h-60 object-cover rounded" src={item.img} />
              <h3 className="mt-3 font-semibold text-xl">{item.title}</h3>
              <h3 className="mt-3 font-semibold text-xl">{item.price}</h3>
            </div>
            </Link> 
             <button
            onClick={() => addToCart(item)}
            className="mt-3 mb-40 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
          >
            Add to Cart
          </button>
          </div>
          ))}
        
        </div>
      </section> 
      
    </>
  )
}

export default Product
