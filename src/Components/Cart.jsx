import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { productlist1 } from "./ProductList";

const Cart = () => {
     const { cartItems, removeFromCart, getTotalPrice, totalCount1 } = useContext(CartContext);
  
      const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>

     <div className=" text-center mt-12 p-16 bg-black">
          <h1 className="text-7xl font-bold text-white text-center -mb-4">BABITA BHARDWAJ SPORTS</h1>
        </div>
        <h1 className="text-center p-8 font-semibold text-7xl">Welcome to Cart!</h1>
      <div className="p-6 bg-gray-50 rounded-lg shadow-md mt-20" >
      <h2 className="text-2xl font-bold mb-4">🛒 <span className="">{totalCount}</span> </h2>  

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-2xl">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-3"
            >
              <div>
                <img src={item.img} alt={item.title} className="h-80 w-80 rounded-xl"/>
                <h3 className="font-semibold text-2xl m-2">{item.title}</h3>
                <p  className="font-semibold text-xl m-2">₹{item.price} × {item.quantity}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 font-semibold hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4 text-lg font-bold">
            Total: ₹{getTotalPrice()}
          </div>
        </>
      )}

      <button className="h-12 w-40 mt-3 mb-40 ml-8 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700" >Proceed to buy</button>
    </div>
    </>
  )
}

export default Cart
