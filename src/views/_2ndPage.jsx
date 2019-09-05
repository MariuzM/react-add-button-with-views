import React from 'react';

export default function _2ndPage() {
  return (
    <div>
      {itemProducts.map(item => (
        <div key={item.id}>
          <div>{item.price}</div>
          <div>{item.image}</div>
        </div>
      ))}
    </div>
  );
}
