import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { createContext } from 'react';
import ThirdPage from './views/ThirdPage';

import './App.scss';

// function Navigation() {
//   return (
//     <div className="navbar navbar-expand-lg navbar-light bg-light">
//       <ul className="navbar">
//         <NavLink exact className="nav-link" to="/">
//           First Page
//         </NavLink>
//         <NavLink className="nav-link" to="/second">
//           Second Page
//         </NavLink>
//         <NavLink className="nav-link" to="/third">
//           Third Page
//         </NavLink>
//       </ul>
//     </div>
//   );
// }

const CartIcon = () => (
  <svg viewBox="0 0 19.25 19.25" width="1em" height="1em">
    <g fill="currentColor">
      <path d="M19.006 2.97a1.003 1.003 0 0 0-.756-.345H4.431l-.195-1.164A1 1 0 0 0 3.25.625H1a1 1 0 1 0 0 2h1.403l1.86 11.164c.008.045.031.082.045.124.016.053.029.103.054.151a.982.982 0 0 0 .12.179c.031.039.059.078.095.112a.96.96 0 0 0 .193.13c.038.021.071.049.112.065a.97.97 0 0 0 .367.075H16.25a1 1 0 1 0 0-2H6.097l-.166-1H17.25a1 1 0 0 0 .99-.858l1-7a1.002 1.002 0 0 0-.234-.797zm-1.909 1.655l-.285 2H13.25v-2h3.847zm-4.847 0v2h-3v-2h3zm0 3v2h-3v-2h3zm-4-3v2h-3a.481.481 0 0 0-.148.03l-.338-2.03H8.25zm-2.986 3H8.25v2H5.597l-.333-2zm7.986 2v-2h3.418l-.285 2H13.25z" />
      <circle cx={6.75} cy={17.125} r={1.5} />
      <circle cx={15.75} cy={17.125} r={1.5} />
    </g>
  </svg>
);

const Button = ({ addToCart, total }) => {
  // console.log(addToCart, total);
  return (
    <button className="btn btn-secondary m-2" type="button" onClick={addToCart}>
      Add to cart
    </button>
  );
};

export default function App() {
  const [total, setCartTotal] = useState(0);
  const addToCart = () => setCartTotal(total + 1);

  return (
    <>
      <Router>
        <div className="navbar navbar-dark bg-dark">
          <ul className="navbar">
            <NavLink to="/" className="nav-link">
              First Page
            </NavLink>
            <NavLink to="/second" className="nav-link">
              Second Page
            </NavLink>
            <NavLink to="/third" className="nav-link">
              Third Page
            </NavLink>
          </ul>

          <form className="form-inline">
            <StyledCartButton total={total} />
          </form>
        </div>

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

          <Route exact path="/third" component={ThirdPage} total={total} />

          <Route path="/" render={() => <div>404</div>} />
        </Switch>
      </Router>
    </>
  );
}

const CartButton = ({ className, total }) => {
  return (
    <div className={className}>
      <CartIcon />
      {/* <span className="cart-button-total">{total}</span> */}
      <span className={total >= 0 ? 'cart-button-total' : ''}>
        {/* wwqeqw */}
        {total >= 0 ? total : ''}
      </span>
    </div>
  );
};

const buttonBackground = '#0071db';
const StyledCartButton = styled(CartButton)`
  background: ${buttonBackground};
  border: none;
  border-radius: 5px;
  color: #fff;
  padding-top: 2px;
  height: 40px;
  line-height: 44px;
  font-size: 20px;
  position: relative;
  text-align: center;
  width: 50px;
  .cart-button-total {
    padding: 0 7px;
    background: #fff;
    border: 2px solid ${buttonBackground};
    border-radius: 50%;
    color: ${buttonBackground};
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
    position: absolute;
    right: -8px;
    top: -8px;
    height: auto;
    // min-width: 20px;
  }
`;
