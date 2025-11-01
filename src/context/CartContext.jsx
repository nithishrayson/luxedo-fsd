import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const addItem = (item) => {
    setCart((prev) => {
      const existing = prev[item.id];
      return {
        ...prev,
        [item.id]: {
          ...item,
          quantity: existing ? existing.quantity + 1 : 1,
        },
      };
    });
  };

  const removeItem = (id) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (!updated[id]) return prev;
      if (updated[id].quantity > 1) {
        updated[id].quantity -= 1;
      } else {
        delete updated[id];
      }
      return updated;
    });
  };

  const clearCart = () => setCart({});

  // ✅ Automatically count total items for the bubble
  const cartCount = Object.values(cart).reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const cartItems = Object.values(cart);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, cartCount, cartItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
