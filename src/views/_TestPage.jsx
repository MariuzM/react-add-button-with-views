import React from 'react';
import { CartContext } from '../components/_CartContext';
import { Button } from './Pages';

export default function _TestPage() {
  const { total, addToCart } = React.useContext(CartContext);
  return (
    <>
      <div>{total}</div>
      <div>
        <Button addToCart={addToCart}>Add Prop</Button>
      </div>
    </>
  );
}

// const TestPage = () => {
//   const { total, addToCart } = React.useContext(CartContext);
//   return (
//     <>
//       <div>
//         From from props {total}
//         <Button onClick={addToCart}>Add Prop</Button>
//       </div>
//       {/* <div>
//         From context {totalFromContext}
//         <button onClick={addToCartFromContext}>Add Context</button>
//       </div> */}
//     </>
//   );
// };

// export default TestPage;
