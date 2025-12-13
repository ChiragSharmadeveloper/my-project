import React from 'react'
import { Link } from 'react-router-dom'
import bat1 from '../image/bat4.jpg'
import bat2 from '../image/bat2.jpg'
import bat3 from '../image/bat3.jpg'
import bat4 from '../image/bat5.jpg'
import React from 'react'

const Bats = () => {

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

     const AllBats = [
          {
            id:1,
            title:"Tennis Bats",
            img:bat1,
            price:"1200",
            link:"/alltennisbats",
          },
          {
            id:2,
            title:"Tennis Bats",
            img:bat2,
            link:"/tennisbats",
          },
          {
            id:3,
            title:"Tennis Bats",
            img:bat3,
            link:"/tennisbats",
          },
          {
            id:4,
            title:"Tennis Bats",
            img:bat4,
            link:"/tennisbats",
          },
          {
            id:1,
            title:"English Willow Bats",
            img:bat1,
            link:"/tennisbats",
          },
          {
            id:2,
            title:"English Willow Bats",
            img:bat2,
            price:"3500",
            // link:"/balls",
            link:"/tennisbats",
          },
          {
            id:3,
            title:"English Willow Bats",
            img:bat3,
            link:"/tennisbats",
          },
          {
            id:4,
            title:"English Willow Bats",
            img:bat4,
            link:"/tennisbats",
          },
          {
            id:1,
            title:"Kashmir Willow Bats",
            img:bat1,
            link:"/tennisbats",
          },
          {
            id:2,
            title:"Kashmir Willow Bats",
            img:bat2,
            link:"/tennisbats",
          },
          {
            id:3,
            title:"Kashmir Willow Bats",
            img:bat3,
            price:"2500",
            // link:"/bats",
            link:"/tennisbats",
          },
          {
            id:4,
            title:"Catching Bats",
            img:bat4,
            price:"1800"
            // link:"/balls",
          },
          {
            id:5,
            title:"Catching Bats",
            img:bat4,
            price:"1800"
            // link:"/balls",
          },
          {
            id:6,
            title:"Catching Bats",
            img:bat4,
            price:"1800"
            // link:"/balls",
          },
          {
            id:7,
            title:"Catching Bats",
            img:bat4,
            price:"1800"
            // link:"/balls",
          },
          {
            id:8,
            title:"Catching Bats",
            img:bat4,
            price:"1800",
            // link:"/balls",
            link:"/tennisbats",
          },
        ]


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
      <h1 className="text-start mt-2 font-semibold text-xl">{item.title}</h1>
      <h2 className="text-start mt-2 font-semibold text-xl">{item.price}</h2>
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

    </>
  )
}

export default Bats
