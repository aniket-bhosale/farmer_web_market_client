// import React from "react";

import React from "react";
// import basket from ".";
import { Button, Row , Col, Container } from "reactstrap";
import {  useNavigate } from "react-router-dom";

import CustomCard from "./Card";
import Checkout from "../checkout";




const Basket = ({basket ,removeFromBasket, updateBasketItem}) =>{
  const navigate = useNavigate();

    // const image = basket.attributes.images.data[0].attributes.url;

    const navigateToProductView = (url) => {
      navigate(url);
    }


    const totalPrice = basket.reduce((acc, value) => {
      const itemPrice = Number(value.price) * Number(value.quantity);
        return acc + itemPrice;
      }, 0);

    // console.log("this is basket",basket);

  return (
    <Container >
  <>

    <div className="basket">

        {basket.length ? <h3>Total price: ₹{totalPrice}</h3> : null}
        <Row>
        {basket.map((product, idx) => (
  <Col
    sm="12"
    md="3"
    key={`${idx}${product.productId}`}
    onClick={() =>
      navigateToProductView(
        `/product-details/${product.productId}`
      )
    }
  >
    <CustomCard
      {...{
        ...product,
        // imageUrl,
        index: idx,
        updateBasketItem,
        removeFromBasket,
      }}
    />
    
  </Col>

  
))}

        </Row>

        {basket.length ? 
        <Checkout products={basket}/>:null}
      
    </div>
        {
            !basket.length ?(
                <div className="empty-basket">
                    <h3>Basket is empty</h3>

                    <Button
                        color="info"
                        onClick={()=>{
                            navigate("/")
                        }}
                    >
                        Go Shopping

                    </Button>
                </div>
            ): null}
  </>
  </Container>
  );

}




export default Basket;







