import React from "react";
import { useProductView } from "./useProductView";
import {
  Row,
  Col,
  Card,
  Label,
  Input,
  Button,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  FormGroup,
  CardSubtitle,
  Container,
} from "reactstrap";




const ProductView = ({addToBasket}) => {
  const {
    product,
    getImage,
    description,
    // selectedColor,
    // selectedSize,
    selectedQuantity,
    // setSelectedColor,
    // setSelectedSize,
    handleQuantityChange,
  } = useProductView();
  if (!product || !product.attributes) {
    return null;
  }
  const { attributes } = product;


  const imageUrl = product.attributes.images.data[0].attributes.url;


  console.log("this is image",imageUrl);

  const quantity = Array.from(Array(Number(attributes.quantity)).keys());

  return (
    <div className="product-details">
      <Container>
      <Row>
        <Col sm="12" md="6">
          <div className="image-wrapper">
            <CardImg
            key={attributes.id}
              left="true"
              width="100%"
              src={`http://localhost:1337${imageUrl}`}
              alt=""
            />
          </div>
        </Col>
        <Col sm="12" md="6">
          <CardBody className="content">
          <strong>
            <CardTitle>{attributes.name}</CardTitle>
            </strong>
            <CardText>{attributes.description}</CardText>
            <CardSubtitle>
              <strong>Price: ₹{attributes.price}</strong>
            </CardSubtitle>
            <CardSubtitle>{attributes.quantity} items Left</CardSubtitle>

            <FormGroup className="quantity">
                <Label for="exampleSelect">Selected items</Label>
                <Input
                  value={selectedQuantity}
                  type="select"
                  name="quantity"
                  id="exampleSelect"
                  onChange={handleQuantityChange}
                >
                  {quantity.map((number) => (
                    <option key={number}>{number}</option>
                  ))}
                </Input>
              </FormGroup>

            
            <Button color="primary"
              onClick={() =>{
                addToBasket({
                  ...product,
                  imageUrl,
                  description,
                  quantity:  selectedQuantity,
                  
                })
              }}
            >Add to basket</Button>
            
          </CardBody>
        </Col>
      </Row>

      </Container>
    </div>
  );
};



export default ProductView;
