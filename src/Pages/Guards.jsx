import React from 'react'
import { Link } from 'react-router-dom'
import guard1 from '../image/guard1.webp'

const Guards = () => {

     const AllGuards = [
                {
                  id:1,
                  title:"Elbow Guards",
                  img:guard1,
                  // link:"/bats",
                },
                {
                  id:2,
                  title:"Leg Guards",
                  img:guard1,
                  // link:"/balls",
                },
                {
                  id:3,
                  title:"Thigh Guards",
                  img:guard1,
                  // link:"/bats",
                },
                {
                  id:4,
                  title:"Abdominal Guards",
                  img:guard1,
                  // link:"/balls",
                },
              ]

  return (
    <div>
        <div className="grid grid-cols-1 mt-24 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {AllGuards.map((item) => (
  <Link key={item.id} to={item.link}>
    <div className="p-4 shadow-md rounded-xl hover:scale-105 transition">
      <img src={item.img} alt={item.title} className="w-full h-72 rounded-xl" />
      <h1 className="text-center mt-2 font-semibold text-xl">{item.title}</h1>
    </div>
  </Link>
))}
</div>
    </div>
  )
}

export default Guards
