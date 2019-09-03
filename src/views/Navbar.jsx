import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledCartButton from '../components/CartButton';
import { CartContext } from '../components/_CartContext';

export default function Navbar() {
  const { total } = React.useContext(CartContext);
  return (
    <div>
      <div className="navbar navbar-dark bg-dark">
        <ul className="navbar">
          <NavLink to="/" className="nav-link">
            First Page
          </NavLink>
          <NavLink to="/second" className="nav-link">
            Second Page
          </NavLink>
          {/* <NavLink to="/third" className="nav-link">
	              Third Page
	            </NavLink> */}
          <NavLink to="/test" className="nav-link">
            Test Page
          </NavLink>
        </ul>

        <form className="form-inline">
          <StyledCartButton total={total} />
        </form>
      </div>
    </div>
  );
}
