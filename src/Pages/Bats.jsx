import React from 'react'
import tennisBat1 from '../assets/bat4.jpg'
import { Link } from 'react-router-dom';

const Bats = () => {
    
    const AllBats = [
      {
        id:1,
        title:"Tennis Bats",
        img:tennisBat1,
      },
      {
        id:2,
        title:"English Bats",
        img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      },
      {
        id:3,
        title:"Kashmiri Bats",
        img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      },
      {
        id:4,
        title:"Catching Bats",
        img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      },
    ]

  return (
    <>

    {/* ALL BATS */}    
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
