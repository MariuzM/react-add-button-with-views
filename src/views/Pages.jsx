import React from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import { CartContext } from '../components/_CartContext';
import _1stPage from './_1stPage';
import _3rdPage from './_3rdPage';

import _TestPage from './_TestPage';
import { AnimateOnChange } from 'react-animation';

export const Button = ({ addToCart }) => {
  return (
    <button className="btn btn-secondary m-2" type="button" onClick={addToCart}>
      {addToCart ? 'Added to cart' : 'Add to Cart'}
    </button>
  );
};

export default function SwitchPages() {
  const { total, addToCart } = React.useContext(CartContext);

  return (
    <Switch>
      <Route exact path="/">
        First Page
        <_1stPage />
        {/* <Button addToCart={addToCart} /> */}
      </Route>

      <Route exact path="/second">
        Second Page
        <button className="btn btn-secondary m-2" type="button" onClick={addToCart}>
          Add to cart
        </button>
      </Route>

      <Route exact path="/third">
        Third Page
        <_3rdPage />
      </Route>

      <Route exact path="/test">
        <_TestPage />
        {/* <div>{total}</div> */}
        {/* <Test addToCart={addToCart} total={total} /> */}
      </Route>

      <Route path="/" render={() => <div>404</div>} />
    </Switch>
  );
}
