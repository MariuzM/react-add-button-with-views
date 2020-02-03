import React, { useContext } from 'react'
import { CartContext } from '../components/_CartContext'
import AddToCartButton from '../components/AddToCartButton'

export default function _TestPage() {
  const { total } = useContext(CartContext)
  return (
    <>
      <div>{total}</div>
      <AddToCartButton />
    </>
  )
}
