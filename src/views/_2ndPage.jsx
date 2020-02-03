import React from 'react'

export default function _2ndPage() {
  return (
    <div>
      {itemProducts.map(({ id, price, image }) => (
        <div key={id}>
          <div>{price}</div>
          <div>{image}</div>
        </div>
      ))}
    </div>
  )
}
