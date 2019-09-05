import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledCartButton from '../components/CartButton';
import { CartContext } from '../components/_CartContext';
import { Navbar } from 'react-bootstrap';

export default function Navbar2() {
  const { total } = React.useContext(CartContext);
  return (
    <Navbar bg="dark" expand="lg" sticky="top" className="justify-content-between">
      <Navbar className="justify-content-between">
        <NavLink to="/" className="nav-link">
          First Page
        </NavLink>

        <NavLink to="/second" className="nav-link">
          Second Page
        </NavLink>

        <NavLink to="/third" className="nav-link">
          Third Page
        </NavLink>

        <NavLink to="/test" className="nav-link">
          Test Page
        </NavLink>
      </Navbar>

      <StyledCartButton total={total} />
    </Navbar>
  );
}
