import React from 'react';
import { itemProducts } from '../components/DataBase';
import { Row, Col } from 'react-bootstrap';

export default function _3rdPage() {
  return (
    <Row className="d-flex justify-content-center">
      {itemProducts.map(item => {
        const { id, price, image } = item;
        // const newPrice = Number(price).toFixed(2);
        return (
          <div key={id} className="m-3">
            <div>{Number(price).toFixed(2)}</div>
            <img className="image" src={image} />
          </div>
        );
      })}
    </Row>
  );
}
