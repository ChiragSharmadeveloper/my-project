import React from 'react'
import { useState, useEffect } from 'react';

const Banner = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
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
      <section id="home" className="pt-20 w-full">
        <div className="relative h-[500px] overflow-hidden">
          <div
            className="flex h-full transition-all duration-700"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((src, i) => (
              <img key={i} className="w-[2000px] h-full object-cover" src={src} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
