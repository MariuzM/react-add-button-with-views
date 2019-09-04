import React from 'react';
import { itemProducts } from './DataBase';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [total, setCartTotal] = React.useState(0);
  const addToCart = () => {
    return setCartTotal(total + 1);
  };
  const [currentPrice, setCurrentPrice] = React.useState('19.99');
  const [addingToCart, setAddingToCart] = React.useState(false);
  const handleAddToCart = () => {
    addToCart();
    setAddingToCart(true);
    setTimeout(() => setAddingToCart(false), 500);
  };

  const map = itemProducts.map(item => <div key={item.id}>{item.price}</div>);

  return (
    <CartContext.Provider
      value={{
        total,
        addToCart,
        currentPrice,
        addingToCart,
        handleAddToCart,
        map
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
