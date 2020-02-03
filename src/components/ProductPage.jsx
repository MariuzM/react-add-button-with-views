import React, { useContext } from 'react'
import { CartContext } from './_CartContext'

const ProductPage = ({ description }) => {
  const { title, currentPrice, addingToCart, handleAddToCart } = useContext(CartContext)

  return (
    <div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <p className="price">${currentPrice}</p>
        <button className="addToCart" onClick={handleAddToCart}>
          {addingToCart ? 'Added to cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}

export default ProductPage
