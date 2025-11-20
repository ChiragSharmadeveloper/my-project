import React from 'react'
import { Link } from 'react-router-dom';
import pad1 from '../image/blackPads.jpg'
import pad2 from '../image/bluePads.jpg'
import pad3 from '../image/whitePads.jpg'
import pad4 from '../image/whitePads9.jpg'

const Pads = () => {
  
  const AllPads = [
            {
              id:1,
              title:"Batting Pads",
              img:pad1,
              // link:"/bats",
            },
            {
              id:2,
              title:"Keeping Pads",
              img:pad2,
              // link:"/balls",
            },
            {
              id:3,
              title:"Thigh Pads",
              img:pad3,
              // link:"/bats",
            },
            {
              id:4,
              title:"Fielding Pads",
              img:pad4,
              // link:"/balls",
            },
          ]

    return (
    <>
      
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {AllPads.map((item) => (
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

export default Pads
