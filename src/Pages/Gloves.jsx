import React from 'react'
import { Link } from 'react-router-dom';
import gloves1 from '../image/gloves1.jpg';
import gloves2 from '../image/gloves2.jpg';
import gloves3 from '../image/gloves4.jpg';
import gloves4 from '../image/gloves5.jpg';

const Gloves = () => {

     const AllGloves = [
              {
                id:1,
                title:"Batting Gloves",
                img:gloves1,
                // link:"/bats",
              },
              {
                id:2,
                title:"Keeping Gloves",
                img:gloves2,
                // link:"/balls",
              },
              {
                id:3,
                title:"Premium Gloves",
                img:gloves3,
                // link:"/bats",
              },
              {
                id:4,
                title:"Kids Gloves",
                img:gloves4,
                // link:"/balls",
              },
            ]

  return (
    <>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {AllGloves.map((item) => (
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

export default Gloves
