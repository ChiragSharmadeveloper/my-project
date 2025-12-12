import React from 'react'
import { Link } from 'react-router-dom'
import bat1 from '../image/bat4.jpg'
import bat2 from '../image/bat2.jpg'
import bat3 from '../image/bat3.jpg'
import bat4 from '../image/bat5.jpg'

const Bats = () => {

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
            price:"3500"
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
            price:"1800"
            // link:"/balls",
            link:"/tennisbats",
          },
        ]


  return (
    <>
      
       <div className="grid grid-cols-1 mt-24 sm:grid-cols-2 md:grid-cols-4 gap-8">
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
