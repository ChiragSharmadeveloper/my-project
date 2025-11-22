import React from 'react'
import { Link } from 'react-router-dom'
import accessories1 from '../image/G2.jpg'
import accessories2 from '../image/G2.jpg'
import accessories3 from '../image/G2.jpg'
import accessories4 from '../image/G2.jpg'


const Accessories = () => {
  
   const AllPads = [
              {
                id:1,
                title:"Robotic Arm",
                img:accessories1,
                // link:"/bats",
              },
              {
                id:2,
                title:"Grip Enhancer",
                img:accessories2,
                // link:"/balls",
              },
              {
                id:3,
                title:"Wrist Support",
                img:accessories3,
                // link:"/bats",
              },
              {
                id:4,
                title:"Sweatbands",
                img:accessories4,
                // link:"/balls",
              },
            ]

    return (
    <>

    <div className="grid grid-cols-1 mt-24 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {AllPads.map((item) => (
  <Link key={item.id} to={item.link}>
    <div className="p-4 shadow-md rounded-xl hover:scale-105 transition">
      <img src={item.img} alt={item.title} className="w-full h-72 rounded-xl" />
      <h1 className="text-center mt-2 font-semibold text-xl">{item.title}</h1>
    </div>
  </Link>
))}
</div>

    </>  
  )
}

export default Accessories
