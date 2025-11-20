import React from 'react'
import { Link } from 'react-router-dom'
import clothing1 from '../image/clothing1.webp'
import clothing2 from '../image/clothing1.webp'
import clothing3 from '../image/clothing1.webp'
import clothing4 from '../image/clothing1.webp'


const Clothing = () => {

    const AllPads = [
                {
                  id:1,
                  title:"Jerseys",
                  img:clothing1,
                  // link:"/bats",
                },
                {
                  id:2,
                  title:"Trousers",
                  img:clothing2,
                  // link:"/balls",
                },
                {
                  id:3,
                  title:"Tracksuits",
                  img:clothing3,
                  // link:"/bats",
                },
                {
                  id:4,
                  title:"Shorts",
                  img:clothing4,
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

export default Clothing
