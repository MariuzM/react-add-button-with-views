import React from 'react'
import { CartContext } from '../components/_CartContext'

export default function AddToCartButton() {
  const { addingToCart, handleAddToCart } = React.useContext(CartContext)
  return (
    <button className="btn btn-secondary m-2" type="button" onClick={handleAddToCart}>
      {addingToCart ? 'Added to cart' : 'Add to Cart'}
    </button>
  )
}
