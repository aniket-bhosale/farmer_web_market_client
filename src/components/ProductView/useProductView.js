import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



export const getQuery = (key, search) => {
  const querys = search?.replace("?", "")?.split("&");
  const query = querys.find((query) => query.includes(key));
  const queryValue = query?.replace(`${key}=`, "");
  return queryValue;
};



export const useProductView = () => {
  const { id: productId } = useParams();
  const [product, setProduct] = useState({});
  // const [selectedColor, setSelectedColor] = useState("");
  // const [selectedSize, setSelectedSize] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleQuantityChange = ({ target: { value } }) => {
    setSelectedQuantity(value);
  };


  const getImage = (product) => {
    const { attributes } = product;
    const firstImage =  product.attributes.images.data[0].attributes.url;
  
    // return firstImage?.attributes?.url || "";

    return firstImage;
  };
  



  // const getImage = (colour) => {
  //   const { attributes } = product;
  //   const image = attributes.images.data.find((image) =>
  //     image.attributes.name.includes(colour)
  //   );

  //   return image?.attributes?.url || "";
  // };

  // useEffect(() => {
  //   if (product && product.attributes) {
  //     const { attributes } = product;
  //     setSelectedColor(attributes.colours[0].name);
  //     setSelectedSize(attributes.sizes[0].name);
  //   }
  // }, [product, setSelectedColor, setSelectedSize]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const {
          data: { data },
        } = await axios.get(
          `http://localhost:1337/api/products/${productId}?populate=*`
        );
        console.log("this is data",data);
        setProduct(data);
      } catch (error) {
        console.log({ error });
      }
    };

    if (productId) {
      fetchCategories();
    }
  }, [productId]);

  return {
    product,
    getImage,
    // selectedSize,
    // selectedColor,
    selectedQuantity,
    // setSelectedColor,
    // setSelectedSize,
    handleQuantityChange,
  };
};

export default useProductView
