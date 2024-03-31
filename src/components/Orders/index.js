import React from "react";
import { Col, Container, Row } from "reactstrap";
import Product from "../Home/Product";

const getDateTime = (string) => {
  const fullDate = new Date(string);
  const date = fullDate.toLocaleDateString();
  const time = fullDate.toLocaleTimeString();
  return `${date} - ${time}`;
  
};

const Orders = ({ orders }) => {

  console.log("this is orders",orders);
    
  return (

    <Container>
    <div className="orders" style={{marginTop:"90px"}}>
      {orders.length ? (
        <>
          <h2>Your orders:</h2>
          {orders.map((order) => (
            <div key={order.createdAt}>
              <h3>Order date: {getDateTime(order.createdAt)}</h3>
              <Row>
                {order.orders.map((product) => (
                  <Col sm="12" md="4" key={product.id}>
                    <Product orderCard product={product} />
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </>
      ) : (
        <h2>No orders avaliable.</h2>
      )}
    </div>
  </Container>
  );

};

export default Orders;