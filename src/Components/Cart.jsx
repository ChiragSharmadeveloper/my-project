import React, { useContext } from "react";
import {productlist1} from "./ProductList";
import { CartContext } from "../context/CartContext";

const Cart = () => {
     const { cartItems, removeFromCart, getTotalPrice } = useContext(CartContext);
  
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <div className="p-6 bg-gray-50 rounded-lg shadow-md mt-96" >
      <h2 className="text-2xl font-bold mb-4">🛒 <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
        {totalCount}
      </span> </h2> 

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
                <img src={item.image} style={{height:'400px', width:'350px'}}/>
                <h3 className="font-semibold">{item.name}</h3>
                <p>₹{item.price} × {item.quantity}</p>
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
    </div>
    </>
  )
}

export default Cart
