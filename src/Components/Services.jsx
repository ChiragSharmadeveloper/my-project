import React from 'react'
import serviceImg1 from '../image/ServicesImg1.webp'

const Services = () => {
  return (
    <>
      <div className='flex shadow-lg shadow-blue-100 mt-20'>
        <img src={serviceImg1} alt="services" className='h-80 w-96 rounded-xl m-12'/>
        <p className='mt-28 text-center w-[50%] ml-20'>At the heart of every athlete’s journey lies the right equipment—reliable, durable, and crafted for performance. This curated selection represents the perfect beginning for a modern sports e-commerce platform serving customers across PAN India. From essential cricket gear to football, badminton, tennis, basketball, volleyball, and foundational fitness accessories, each item is chosen to meet the needs of beginners, enthusiasts, and aspiring professionals alike.</p>

      </div>
    </>
  )
}

export default Services
