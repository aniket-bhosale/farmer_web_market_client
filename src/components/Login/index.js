import React, { useState } from "react";
import { Col, Row, Button, FormGroup, Input, Container } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { storeUser } from "../../helpers";

const initialUser = { password: "", identifier: "" };

const Login = () => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const [activeButton, setActiveButton] = useState(null);


  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };







  const handleLogin = async () => {
    const url = `http://localhost:1337/api/auth/local`;
    try {
      if (!user.identifier || !user.password) {
        // Check if email or password is empty
        toast.error("Email and password are required.", {
          hideProgressBar: true,
        });
        return;
      }
  
      const { data } = await axios.post(url, user);
  
      if (data.jwt) {
        // Check if the user is already logged in
        if (isUserLoggedIn()) {
          // Handle case where user is already logged in
          toast.error("User is already logged in!", {
            hideProgressBar: true,
          });
        } else {
          storeUser(data);
          toast.success("Logged in successfully!", {
            hideProgressBar: true,
          });
          setUser(initialUser);



          if (activeButton === "farmer") {
            navigate("/farmer");
          } else {
            navigate("/");
          }

          
          window.location.reload();
        }
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          // Handle case where password is incorrect
          toast.error("Incorrect password. Please try again.", {
            hideProgressBar: true,
          });
        } else if (error.response.status === 404) {
          // Handle case where user does not exist (account not found)
          toast.error("No account found. Please sign up first.", {
            hideProgressBar: true,
          });
        } else {
          // Handle other errors
          toast.error(error.message, {
            hideProgressBar: true,
          });
        }
      } else {
        // Handle other non-response errors
        toast.error(error.message, {
          hideProgressBar: true,
        });
      }
    }
  };
  
  
  // Function to check if the user is already logged in (example)
  const isUserLoggedIn = () => {
    // Implement your logic to check if the user is already logged in
    // You might want to check if a user token is stored or any other relevant information
    // Return true if logged in, false otherwise
    return false; // Placeholder, replace with actual logic
  };
  



  

  return (

    <Container>
    <Row className="login">
      <Col sm="12" md={{ size: 4, offset: 4 }}>
        <div>
          <h2>Login:</h2>



          <div style={{ display: "flex", gap:"10px", marginBottom: "10px" }}>

              <Button
                color={activeButton === "customer" ? "success" : "primary"}
                onClick={() => setActiveButton("customer")}
                className="login-button"
              >
                Customer
              </Button>
              <Button
                color={activeButton === "farmer" ? "success" : "primary"}
                onClick={() => setActiveButton("farmer")}
                className="login-button"
              >
                Farmer
              </Button>
            </div>




          <FormGroup>
            <Input
              type="email"
              name="identifier"
              value={user.identifier}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </FormGroup>
          <Button color="primary" onClick={handleLogin}>
            Login
          </Button>

          <Button color="link" onClick={handleForgotPassword}>
            Forgot Password
          </Button>


          <h6>
            Click <Link to="/registration">Here</Link> to sign up
          </h6>
        </div>
      </Col>
    </Row>

    </Container>
  );
};

export default Login;
