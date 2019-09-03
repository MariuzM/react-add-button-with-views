import React from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import { CartContext } from '../components/_CartContext';
// import Test from './views/Test';

export const Button = ({ addToCart }) => {
  return (
    <button className="btn btn-secondary m-2" type="button" onClick={addToCart}>
      Add to cart
    </button>
  );
};

export default function SwitchPages() {
  const { total, addToCart } = React.useContext(CartContext);

  return (
    <Switch>
      <Route exact path="/">
        First Page
        <Button addToCart={addToCart} />
      </Route>

      <Route exact path="/second">
        Third Page
        <button className="btn btn-secondary m-2" type="button" onClick={addToCart}>
          Add to cart
        </button>
      </Route>

      {/* <Route
				exact
				path="/third"
				component={ThirdPage}
				total={total}
				addToCart={addToCart}
			/> */}

      <Route exact path="/test">
        <div>{total}</div>
        {/* <Test addToCart={addToCart} total={total} /> */}
      </Route>

      <Route path="/" render={() => <div>404</div>} />
    </Switch>
  );
}
