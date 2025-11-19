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
            // link:"/bats",
          },
          {
            id:2,
            title:"English Willow Bats",
            img:bat2,
            // link:"/balls",
          },
          {
            id:3,
            title:"Kashmir Willow Bats",
            img:bat3,
            // link:"/bats",
          },
          {
            id:4,
            title:"Catching Bats",
            img:bat4,
            // link:"/balls",
          },
        ]


  return (
    <>
      
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {AllBats.map((item) => (
  <Link key={item.id} to={item.link}>
    <div className="p-2 shadow-md rounded-xl hover:scale-105 transition">
      <img src={item.img} alt={item.title} className="w-full h-72 rounded-xl" />
      <h1 className="text-center mt-2 font-semibold text-xl">{item.title}</h1>
    </div>
  </Link>
))}
</div> 

    </>
  )
}

export default Bats
