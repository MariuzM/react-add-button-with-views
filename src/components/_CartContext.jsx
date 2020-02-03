import React, { useState, createContext } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [total, setCartTotal] = useState(0)
  const addToCart = () => setCartTotal(total + 1)
  const [currentPrice] = useState('19.99')
  const [addingToCart, setAddingToCart] = useState(false)
  const handleAddToCart = () => {
    addToCart()
    setAddingToCart(true)
    setTimeout(() => setAddingToCart(false), 500)
  }
  return (
    <CartContext.Provider
      value={{
        total,
        addToCart,
        currentPrice,
        addingToCart,
        handleAddToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
