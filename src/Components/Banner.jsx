import React from 'react';
import { useState, useEffect } from 'react';
import BannerSlide from '../image/BannerSlide.webp';
import Black from'../image/Blogo.jpg' 
import Opening from '../image/Opening.jpg'
import Prmpads from '../image/Premium pads.jpg'

const Banner = () => {

  const [index, setIndex] = useState(0);
  
  const images = [
    Black,
    Opening,
    BannerSlide,

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
       {/* HERO SLIDER */}
      <section id="home" className="pt-20 mt-2 w-full">
        <div className="relative h-[500px] overflow-hidden">
          <div
            className="flex h-full transition-all duration-700"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((src, i) => (
              <img key={i} className="w-fit h-full object-cover" src={src} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
