import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Banner from './Banner'
// import Product from './Product'
import Contact from './Contact'
import bat1 from '../image/bat4.jpg'
import pad1 from '../image/whitePads.jpg'
import gloves1 from '../image/gloves1.jpg'
import bag1 from '../image/bag4.jpg'
import ball1 from '../image/ball.jpg'
import guard1 from '../image/gloves1.jpg'
import clothing1 from '../image/G2.jpg'
import accessories1 from '../image/G2.jpg'

const Home = () => {

  const HomeCard = [

      {
        id:1,
        title:"Bats",
        img:bat1,
        link:"/products/bats",
      },
      {
        id:2,
        title:"Cricket Pads",
        img:pad1,
        link:"/pads",
      },
      {
        id:3,
        title:"Gloves",
        img:gloves1,
        link:"/gloves",
      },
      {
        id:4,
        title:"Kit Bags",
        img:bag1,
        link:"/kitbags",
      },
      {
        id:5,
        title:"Balls",
        img:ball1,
        link:"/products/balls",
      },
      {
        id:6,
        title:"All Guards",
        img:guard1,
        link:"/guards",
      },
      {
        id:7,
        title:"Clothing",
        img:clothing1,
        link:"/clothing",
      },
      {
        id:8,
        title:"Accessories",
        img:accessories1,
        link:"/accessories",
      },
    ]


  return (
    <>
      <Header/>
    
      <Banner/>

      <div className='mt-28 max-w-full'>
        <h2 className="text-5xl font-bold mb-8 text-center">Featured Products</h2>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {HomeCard.map((item) => (
  <Link key={item.id} to={item.link}>
    <div className="p-2 shadow-md rounded-xl hover:scale-105 transition">
      <img src={item.img} alt={item.title} className="w-full h-72 rounded-xl" />
      <h1 className="text-center mt-2 font-semibold text-xl">{item.title}</h1>
    </div>
  </Link>
))}
</div>   
        </div>
      <Contact/>
    </>
  )
}
 export default Home;