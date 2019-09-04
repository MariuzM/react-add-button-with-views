import React from 'react';
import { CartContext } from './_CartContext';

const ProductPage = ({ image, description }) => {
  const { title, currentPrice, addingToCart, handleAddToCart, map } = React.useContext(
    CartContext
  );

  return (
    <div>
      <div>{map} Just Testing</div>
      <div className="content">
        <img className="image" src={image} />
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <p className="price">${currentPrice}</p>
        <button className="addToCart" onClick={handleAddToCart}>
          {addingToCart ? 'Added to cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

// ProductPage.propTypes = {
//   className: PropTypes.string
// };

// const StyledProductPage = styled(ProductPage)`
//   background: ${props => props.theme.colors.contentBackground};
//   border-radius: ${props => props.theme.borderRadius};
//   padding: 20px;
//   margin: 20px auto;
//   max-width: ${props => props.theme.maxContainerWidth};
//   position: relative;
//   display: flex;

//   .content {
//     margin: 0 40px;
//   }

//   .price {
//     font-size: 32px;
//     font-weight: ${props => props.theme.fontWeights.bold};
//     margin: 0;
//   }

//   .addToCart {
//     background: #0074d9;
//     border: 2px solid #fff;
//     border-radius: 5px;
//     color: #fff;
//     cursor: pointer;
//     font-size: 24px;
//     font-weight: bold;
//     padding: 14px 20px;
//     margin: 10px 0;
//   }
// `;

// StyledProductPage.displayName = 'ProductPage';
// export default StyledProductPage;
export default ProductPage;
