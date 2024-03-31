import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import { Container } from "reactstrap";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Logout from "./components/Logout";
import CustomNav from "./components/CustomNav";
import { ToastContainer } from "react-toastify";
import ProductView from "./components/ProductView";

import Basket from "./components/basket";

import { Protector, userData } from "./helpers";

// import useBasket from "./components/Basket/useBasket";

import useBasket from "./components/basket/useBasket";

import ForgotPassword from "./components/Login/ForgotPassword";
import Orders from "./components/Orders";
import useOrders from "./components/Orders/useOrders";

// import Double from "./components/Double";

import { Container } from "reactstrap";
import Farmer from "./components/Farmer";
import Profile from "./components/Profile";



function App() {

  const { jwt, username,city } = userData();
  const isLoggedIn = !!jwt;
  const { orders, setIsNewOrdersAdded } = useOrders(jwt);
  const { basket , addToBasket, removeFromBasket,updateBasketItem} = useBasket(jwt,
    setIsNewOrdersAdded);

  // console.log("users",userData);
  // const isLoggedIn = !!jwt;

  return (
    <div>
        <BrowserRouter>
        <CustomNav 
        basketItems={basket.length} 
        isLoggedIn={isLoggedIn} 
        username={username} 
        />

        
          <Routes>
            <Route path="/" element={<Home />} />

        {/* <Container> */}
            <Route path="/login" element={<Login />} />

            <Route path="/forgot-password" element={<ForgotPassword />} />

            <Route path="/logout" element={<Logout />} />

            <Route path="/product-details/:id" element={<ProductView addToBasket={addToBasket} />} />

            <Route path="/registration" element={<Registration />} />


            {/* <Route path="/double" element={<Double/>} /> */}


            


            <Route
              path="/orders"
              element={<Protector Component={<Orders orders={orders} />} />}
            />


            <Route
              path="/profile"
              element={<Protector Component={<Profile token={jwt} />} />}
            />


            <Route
              path="/basket"
              element={
                <Basket
                  basket={basket} 
                  removeFromBasket={removeFromBasket}
                  updateBasketItem={updateBasketItem}
                />
              }
            />



            <Route path="/farmer" element={<Farmer token={jwt} orders={orders} city={city} />} />
            {/* <Route path="/basket" element={<Basket/>} /> */}

          </Routes>
          <ToastContainer />
      {/* </Container> */}
        </BrowserRouter>
    </div>
  );
}

export default App;
