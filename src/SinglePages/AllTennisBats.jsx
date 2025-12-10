import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import bat1 from '../image/bat4.jpg'             //images for main product pages 
import bat2 from '../image/bat2.jpg'         
import bat3 from '../image/bat3.jpg'
import bat4 from '../image/bat5.jpg'


const AllTennisBats = () => {

    const images = [
        bat1,
        bat2,
        bat3,
        bat4,
];
    const [mainImage, setMainImage] = useState(images[0]);

  return (
    <>

       <div className="w-full max-w-md mx-auto m-36">
      {/* Main Image */}
      <div className="mb-4">
        <img
          src={mainImage}
          alt="Main"
          className="w-full h-88 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex justify-between gap-4">
        {images.slice(1).map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Thumbnail"
            onClick={() => setMainImage(img)}
            className={`w-24 h-24 object-cover rounded-lg cursor-pointer border 
              ${mainImage === img ? "border-blue-500" : "border-gray-300"} 
              hover:scale-105 transition`}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default AllTennisBats
