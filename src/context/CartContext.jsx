import React, { createContext, useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const totalCount1 = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

// For quantity
  // Increasing Quantity
    const increase = (id) => {
  setCartItems(prevItems =>
    prevItems.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

// Decreasing quantity
const decrease = (id) => {
  setCartItems(prevItems =>
    prevItems.map(item =>{
      if (item.id === id) {
        if (item.quantity === 1) {
          removeFromCart(id);
          return null;
        }
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }).filter(Boolean)
  );
};



  return (
    <>

    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotalPrice, totalCount1,increase ,decrease }}>
      {children}
    </CartContext.Provider> 
    </>
  )
}

export default CartContext
