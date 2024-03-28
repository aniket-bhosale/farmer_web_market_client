// NewPassword.js
import React, { useState } from "react";
import { Col, Row, Button, FormGroup, Input } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { value } = target;
    setPassword(value);
  };

  const handleUpdatePassword = async () => {
    try {
      const url = `http://localhost:1337/auth/reset-password`;
      const token = window.location.pathname.split("/").pop(); // Assuming the reset token is included in the URL
      const data = { password, token };

      await axios.post(url, data);

      toast.success("Password updated successfully!", {
        hideProgressBar: true,
      });

      // Redirect to the login page after updating the password
      navigate("/login");
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  return (
    <Row>
      <Col sm="12" md={{ size: 4, offset: 4 }}>
        <div>
          <h2>Set New Password:</h2>
          <FormGroup>
            <Input
              type="password"
              value={password}
              onChange={handleChange}
              placeholder="Enter your new password"
            />
          </FormGroup>
          <Button color="primary" onClick={handleUpdatePassword}>
            Update Password
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default NewPassword;
