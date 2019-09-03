import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './views/Navbar';
import { CartProvider } from './components/_CartContext';
import Pages from './views/Pages';

import './App.scss';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Pages />
      </Router>
    </CartProvider>
  );
}
