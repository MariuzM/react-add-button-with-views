import React from 'react';
import PropTypes from 'prop-types';
import ProductPage from '../components/ProductPage';
import styled from 'styled-components';

const description =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const rand = () => Math.floor(Math.random() * 9999) + 1;

const randomImage = `https://picsum.photos/400/400/?rand&${rand()}`;

export default function _1stPage({ className, addToCart }) {
  return (
    <div>
      <div className={className}>
        <ProductPage
          title="1st Page"
          description={description}
          image={randomImage}
          addToCart={addToCart}
        />
      </div>
    </div>
  );
}

// const StyledProductOne = styled(_1stPage)`
//   background: ${props => props.theme.colors.contentBackground};
//   border-radius: ${props => props.theme.borderRadius};
//   padding: 20px;
//   margin: 20px auto;
//   max-width: ${props => props.theme.maxContainerWidth};
//   position: relative;
// `;

// StyledProductOne.displayName = '1st Page';
