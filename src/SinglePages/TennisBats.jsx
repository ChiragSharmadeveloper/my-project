import React from 'react'
import { Link } from 'react-router-dom'
import bat1 from '../image/bat4.jpg'
import bat2 from '../image/bat2.jpg'
import bat3 from '../image/bat3.jpg'
import bat4 from '../image/bat5.jpg'

const TennisBats = () => {

    const TennisBats = [
              {
                id:1,
                title:"Tennis Bats",
                img:bat1,
                price:"2000",
                link:"/alltennisbats",
              },
              {
                id:2,
                title:"English Willow Bats",
                img:bat2,
                price:"2000",
                // link:"/balls",
              },
              {
                id:3,
                title:"Kashmir Willow Bats",
                img:bat3,
                price:"2000",
                // link:"/bats",
              },
              {
                id:4,
                title:"Catching Bats",
                img:bat4,
                price:"2000",
                // link:"/balls",
              },
            ]
    
  return (
    <>
      <div className="grid grid-cols-1 mt-24 gap-8">
        {TennisBats.map((item) => (
  <Link key={item.id} to={item.link}>
    <div className="p-4 shadow-md rounded-xl hover:scale-105 transition">
      <img src={item.img} alt={item.title} className="w-96 h-72 rounded-xl" />
      <h1 className="mt-2 font-semibold text-xl">{item.title}</h1>
      <h1 className="mt-2 font-semibold text-lg">{item.price}</h1>
    </div>
  </Link>
))}
</div> 
    </>
  )
}

export default TennisBats
