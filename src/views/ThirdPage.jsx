import React from 'react';
import { Button } from '../App';

const ThirdPage = (addToCart, total) => {
  console.log(total);
  return (
    <>
      <div>Third Page</div>
      <Button onClick={addToCart} />
    </>
  );
};

export default ThirdPage;
