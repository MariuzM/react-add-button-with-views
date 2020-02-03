import React, { useContext } from 'react'
import { CartContext } from '../components/_CartContext'

const description =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
const rand = () => Math.floor(Math.random() * 9999) + 1
const randomImage = `https://picsum.photos/400/400/?rand&${rand()}`

export default function _1stPage() {
  const { title, currentPrice, addingToCart, handleAddToCart } = useContext(CartContext)
  return (
    <div>
      <div className="content">
        <img className="image" src={randomImage} />
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
