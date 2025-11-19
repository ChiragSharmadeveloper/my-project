import React from 'react'

const Product = () => {
    const cards = [
      {
        id:1,
        title:"Product 1",
        img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      },
      {
        id:2,
        title:"Product 2",
        img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      },
      {
        id:3,
        title:"Product 3",
        img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      },
      {
        id:4,
        title:"Product 4",
        img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      },
      {
        id:5,
        title:"Product 5",
        img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      },
      {
        id:6,
        title:"Product 6",
        img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      },
      {
        id:7,
        title:"Product 7",
        img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      },
      {
        id:8,
        title:"Product 8",
        img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      },
    ]

  return (
    <>

      {/* PRODUCT CARDS */}
      <section id="products" className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-8 text-center">Featured Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {cards.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-4 hover:scale-110 transition cursor-pointer"
            >
              <img className="w-full h-44 object-cover rounded" src={item.img} />
              <h3 className="mt-3 font-semibold text-lg">{item.title}</h3>
            </div>
          ))}
        </div>
      </section> 
      
    </>
  )
}

export default Product
