import React from 'react'
import { Link } from 'react-router-dom'
import bat1 from '../image/bat4.jpg'
import pad1 from '../image/whitePads.jpg'
import gloves1 from '../image/gloves1.jpg'
import bag1 from '../image/bag4.jpg'
import ball1 from '../image/ball.jpg'
import guard1 from '../image/gloves1.jpg'
import clothing1 from '../image/G2.jpg'
import accessories1 from '../image/G2.jpg'

const Product = () => {
    const Products = [
    
          {
            id:1,
            title:"Bats",
            img:bat1,
            link:"/products/bats",
          },
          {
            id:2,
            title:"Cricket Pads",
            img:pad1,
            link:"/products/pads",
          },
          {
            id:3,
            title:"Gloves",
            img:gloves1,
            link:"/products/gloves",
          },
          {
            id:4,
            title:"Kit Bags",
            img:bag1,
            link:"/products/kitbags",
          },
          {
            id:5,
            title:"Balls",
            img:ball1,
            link:"/products/balls",
          },
          {
            id:6,
            title:"All Guards",
            img:guard1,
            link:"/products/guards",
          },
          {
            id:7,
            title:"Clothing",
            img:clothing1,
            link:"/products/clothing",
          },
          {
            id:8,
            title:"Accessories",
            img:accessories1,
            link:"/products/accessories",
          },
        ]

  return (
    <>

      {/* PRODUCT CARDS */}
      <section id="products" className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-6xl font-bold m-8 text-center">All Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {Products.map((item) => (
         <Link key={item.id} to={item.link}>
       <div className="bg-white shadow-md rounded-lg p-4 hover:scale-110 transition cursor-pointer"
            >
              <img className="w-full h-44 object-cover rounded" src={item.img} />
              <h3 className="mt-3 font-semibold text-lg">{item.title}</h3>
            </div>
            </Link>
          ))}
        
        </div>
      </section> 
      
    </>
  )
}

export default Product
