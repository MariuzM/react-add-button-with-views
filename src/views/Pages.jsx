import React from 'react'
import { Switch, Route } from 'react-router-dom'
import _1stPage from './_1stPage'
import _3rdPage from './_3rdPage'
import _TestPage from './_TestPage'

import AddToCartButton from '../components/AddToCartButton'

// import { AnimateOnChange } from 'react-animation';

// export const Button = ({ addToCart }) => {
//   return (
//     <button className="btn btn-secondary m-2" type="button" onClick={addToCart}>
//       {addToCart ? 'Added to cart' : 'Add to Cart'}
//     </button>
//   );
// };

export default function SwitchPages() {
  return (
    <Switch>
      <Route exact path="/">
        First Page
        <_1stPage />
      </Route>

      <Route exact path="/second">
        Second Page
        <AddToCartButton />
      </Route>

      <Route exact path="/third">
        Third Page
        <_3rdPage />
      </Route>

      <Route exact path="/test">
        <_TestPage />
      </Route>

      <Route path="/" render={() => <div>404</div>} />
    </Switch>
  )
}
