import { useState , useEffect} from 'react'
import './App.css'

function App() {

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

  const cards = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    title: `Product ${i + 1}`,
    img: "https://images.unsplash.com/photo-1513708929605-6dd0e1b6b9bb",
  }));

  return (
    <>  
    <div className="bg-gray-50 text-gray-900 font-poppins">
      {/* NAVBAR */}
      <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">MyStore</h1>

          <ul className="hidden md:flex space-x-8 font-medium">
            <li><a href="#home" className="hover:text-blue-600">Home</a></li>
            <li><a href="#services" className="hover:text-blue-600">Services</a></li>
            <li><a href="#products" className="hover:text-blue-600">Products</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>

          {/* Profile Dropdown */}
          <div className="relative group">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
              <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" className="w-7" />
            </button>
            <div className="absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-md p-2 hidden group-hover:block">
              <a className="block px-3 py-2 hover:bg-gray-100 rounded" href="#login">Login</a>
              <a className="block px-3 py-2 hover:bg-gray-100 rounded" href="#signup">Sign Up</a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SLIDER */}
      <section id="home" className="pt-20">
        <div className="relative w-full h-[500px] overflow-hidden">
          <div
            className="flex w-full h-full transition-all duration-700"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((src, i) => (
              <img key={i} className="w-full h-full object-cover" src={src} />
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT CARDS */}
      <section id="products" className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cards.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-4 hover:scale-105 transition cursor-pointer"
            >
              <img className="w-full h-40 object-cover rounded" src={item.img} />
              <h3 className="mt-3 font-semibold text-lg">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

          <form className="bg-white shadow-lg p-6 rounded-lg space-y-4">
            <input type="email" placeholder="Enter your email" className="w-full p-3 border rounded" />
            <textarea placeholder="Write your comment" rows="4" className="w-full p-3 border rounded"></textarea>
            <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">Submit</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-8 mt-10">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-2">
          <p>© 2025 MyStore — All Rights Reserved</p>
          <p>Email: support@mystore.com | Phone: +91 98765 43210</p>
        </div>
      </footer>
    </div>
    
    </>
  )
}

export default App
