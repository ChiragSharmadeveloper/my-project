import React from 'react'
import { Link } from 'react-router-dom';
import kitbag1 from '../image/bag1.jpg';
import kitbag2 from '../image/bag2.jpg';
import kitbag3 from '../image/bag3.jpg';
import kitbag4 from '../image/bag4.jpg';

const KitBags = () => {
  
  const KitBags = [
              {
                id:1,
                title:"Kit Bags",
                img:kitbag1,
                // link:"/bats",
              },
              {
                id:2,
                title:"Back Packs",
                img:kitbag2,
                // link:"/balls",
              },
              {
                id:3,
                title:"Duffle Bags",
                img:kitbag3,
                // link:"/bats",
              },
              {
                id:4,
                title:"Other Bags",
                img:kitbag4,
                // link:"/balls",
              },
            ]
  
    return (
    <>
        <div className="grid grid-cols-1 mt-24 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {KitBags.map((item) => (
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

export default KitBags
