import React from 'react';
import { CountContext } from '../components/_CartContext';
import { Button } from '../App';

const { total } = React.useContext(CountContext);

const Test = () => {
  // console.log(addToCart);
  // console.log(addToCartFromContext);
  return (
    <>
      <div>
        From from props {total}
        <Button onClick={addToCart}>Add Prop</Button>
      </div>
      {/* <div>
        From context {totalFromContext}
        <button onClick={addToCartFromContext}>Add Context</button>
      </div> */}
    </>
  );
};

export default Test;
