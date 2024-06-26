import React, { useRef } from "react";
import Product from "./Product";
import { Row, Col, Container } from "reactstrap";
import { useProducts } from "./useProducts";
import { useNavigate } from "react-router-dom";
import Hero from "./hero";

const Home = () => {
  const { categories, products } = useProducts();
  const navigate = useNavigate();

  const navigateToProductView = (url) => {
    navigate(url);
  };

  const categoryContainerRef = useRef(null);

  return (
    
    
    <div className="home1">

      <div>
      <Hero categoryContainerRef={categoryContainerRef} />

      <div className="home" id="categoryContainer" ref={categoryContainerRef}>


        <Container >

        <h2 style={{ textAlign: "center" }}>Enjoy our sales!</h2>
        {categories.length
          ? categories.map((category) => {
              const hasProducts = products.filter(
                (product) =>
                  product.attributes.category.data?.id === category?.id
              );
              return hasProducts && hasProducts.length ? (
                <div key={category.id}>
                  <h2 className="category-title">{category.attributes.name}</h2>
                  <Row key={category.id} className="category">
                    {hasProducts.map((product) => (
                      <Col
                        sm="12"
                        md="3"
                        key={product.id}
                        onClick={() =>
                          navigateToProductView(
                            `/product-details/${product.id}`
                          )
                        }
                      >
                        <Product product={product} />
                      </Col>
                    ))}
                  </Row>
                </div>
              ) : null;
            })
          : null}

          </Container>

          </div>
      </div>


    </div>
  );
};

export default Home;