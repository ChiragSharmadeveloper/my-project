import React from 'react';
import { useState, useEffect } from 'react';
import BannerSlide from '../image/BannerSlide.webp';

const Banner = () => {

  const [index, setIndex] = useState(0);
  
  const images = [
    BannerSlide,
    BannerSlide,
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
      <section id="home" className="pt-20 ">
        <div className="relative h-[500px] overflow-hidden">
          <div
            className="flex h-full transition-all duration-700"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((src, i) => (
              <img key={i} className="w-fit h-full" src={src} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
