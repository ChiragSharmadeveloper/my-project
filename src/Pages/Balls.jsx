import React from 'react'
import { Link } from 'react-router-dom'
import ball1 from '../image/ball.jpg'
import ball2 from '../image/ball.jpg'
import ball3 from '../image/ball.jpg'
import ball4 from '../image/ball.jpg'
import ball5 from '../image/ball.jpg'

const Balls = () => {

      const AllBalls = [
              {
                id:1,
                title:"Soft Tennis Balls",
                img:ball1,
                // link:"/bats",
              },
              {
                id:2,
                title:"Hard Tennis Balls",
                img:ball2,
                // link:"/balls",
              },
              {
                id:3,
                title:"White Ball",
                img:ball3,
                // link:"/bats",
              },
              {
                id:4,
                title:"Red Ball",
                img:ball4,
                // link:"/balls",
              },
              {
                id:5,
                title:"Pink Ball",
                img:ball5,
                // link:"/balls",
              }
            ]

  return (
    <>
    <div className="grid grid-cols-1 mt-24 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {AllBalls.map((item) => (
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

export default Balls
