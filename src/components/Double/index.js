import axios from "axios";
import React, { useState, useEffect } from "react";

const useOrders = (token) => {
  const [orders, setOrders] = useState([]);
  const [isNewOrdersAdded, setIsNewOrdersAdded] = useState(false);

  useEffect(() => {
    const getBasketData = async () => {
      try {
        const {
          data: { data },
        } = await axios.get(`http://localhost:1337/api/orders`, {
          headers: {
            Authorization: `bearer ${token}`,
          },
        });

        console.log("orders", { data });

        // Iterate over each order and fetch product information from Stripe
        const ordersWithData = await Promise.all(
          data.map(async (order) => {
            // Make additional request to fetch product information from Stripe
            const stripeId = order.stripeId;
            const productData = await fetchProductDataFromStripe(stripeId);
            return { ...order, products: productData };
          })
        );

        setIsNewOrdersAdded(false);
        setOrders(ordersWithData.reverse());
      } catch (error) {
        console.log({ error });
      }
    };
    if (!!token) {
      getBasketData();
    }
  }, [token, isNewOrdersAdded]);

  // Function to fetch product information from Stripe
  const fetchProductDataFromStripe = async (stripeId) => {
    // Implement logic to fetch product data from Stripe using stripeId
    // Example:
    // const response = await axios.get(`https://api.stripe.com/v1/products/${stripeId}`, {
    //   headers: {
    //     Authorization: `Bearer ${YOUR_STRIPE_API_KEY}`,
    //   },
    // });
    // return response.data;

    // For demonstration purpose, returning dummy product data
    return [{ name: "Product 1", price: 10 }, { name: "Product 2", price: 20 }];
  };

  return { orders, setIsNewOrdersAdded };
};

export default useOrders;
