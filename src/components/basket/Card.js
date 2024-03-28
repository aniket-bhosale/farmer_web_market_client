import React from "react";
// import useProductView from "../ProductView/useProductView";

import "./CustomCard.css";

import {
  
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Label,
  FormGroup,
  Input,
  Container,
} from "reactstrap";

const CustomCard = ({
  id,
  name,
  price,
//   color,
//   size,
//   sizes,
  index,
  quantity,
  imageUrl,
  productId,
  quantities,
  // basketItemId,
  removeFromBasket,
  updateBasketItem

}) => {
  const quantitiesArray = Array.from(Array(Number(quantities || 0)).keys());

  // console.log("card",imageUrl);

  return (
    <Container>

    <Card className="product-card">
      <div className="image-wrapper">
        <CardImg
          top
          width="100%"
          src={`http://localhost:1337${imageUrl}`}
          alt={name}
        />
      </div>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle onClick={(e) => e.stopPropagation()}>
          
        </CardSubtitle>

        <CardSubtitle onClick={(e) => e.stopPropagation()}>
          <FormGroup className="quantity">
            <Label for="exampleSelect">Quantity</Label>
            <Input
              size="sm"
              value={quantity}
              type="select"
              name="quantity"
              id="exampleSelect"
              onChange={({ target: { value } }) => {
                if (value) {
                  updateBasketItem({
                    index,
                    // color,
                    // size,
                    imageUrl,
                    productId,
                    basketItemId:id,
                    quantity:Number(value),
                  });
                }
              }}
            >
              {quantitiesArray.map((number) => (
                <option key={number}>{number}</option>
              ))}
            </Input>
          </FormGroup>
        </CardSubtitle>
        <CardSubtitle>
          <strong>Price:</strong> ₹{price}
        </CardSubtitle>
        <Button
          size="sm"
          color="danger"
          onClick={(e) => {
            e.stopPropagation();
            removeFromBasket({
              basketItemId: id,
              productId,
              price,
              // color,
              index,
              quantity,
            });
          }}
        >
          Remove
        </Button>
      </CardBody>
    </Card>


    </Container>
  );

};

export default CustomCard;