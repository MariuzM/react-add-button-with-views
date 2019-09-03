import React from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [total, setCartTotal] = React.useState(0);
  const addToCart = () => setCartTotal(total + 1);

  return (
    <CartContext.Provider
      value={{
        total,
        addToCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
