import React from 'react';
import { itemProducts } from '../components/DataBase';

export default function _3rdPage() {
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
