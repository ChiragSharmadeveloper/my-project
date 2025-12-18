import React from 'react'
import { Link } from 'react-router-dom'

const SubHeader = () => {
  return (
    // navbar for easy access
     
    <div className='mb-40'>
        <ul className="flex flex-wrap gap-4 p-1 ml-44  pl-2 font-bold text-black bg-gray-300 rounded-xl
                w-full
                sm:gap-4 sm:pl-2
                md:gap-10 md:pl-6
                lg:gap-22 lg:pl-6 lg:w-[1200px] fixed z-1000" >
        <Link to="/products/bats" className="hover:text-red-500"><li>Bats</li></Link>
        <Link to="/products/pads" className="hover:text-red-500"><li>Cricket Pads</li></Link>
        <Link to="/products/gloves" className="hover:text-red-500"><li>Gloves</li></Link>
        <Link to="/products/kitbags" className="hover:text-red-500"><li>Kit Bags</li></Link>
        <Link to="/products/balls" className="hover:text-red-500"><li>Balls</li></Link>
        <Link to="/products/guards" className="hover:text-red-500"><li>All Guards</li></Link>
        <Link to="/products/clothing" className="hover:text-red-500"><li>clothing</li></Link>
        <Link to="/products/accessories" className="hover:text-red-500"><li>Accessories</li></Link>
        </ul>
      
    </div>
  )
}

export default SubHeader;
