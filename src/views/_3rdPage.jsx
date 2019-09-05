import React from 'react';
import { itemProducts } from '../components/DataBase';
import { Row, Col } from 'react-bootstrap';

export default function _3rdPage() {
  return (
    <Row>
      {itemProducts.map(item => {
        const { id, price, image } = item;
        // const newPrice = Number(price).toFixed(2);
        return (
          <Col key={id}>
            <div>{Number(price).toFixed(2)}</div>
            <img className="image" src={image} />
          </Col>
        );
      })}
    </Row>
  );
}
