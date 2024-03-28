// // ForgotPassword.js
// import React, { useState } from "react";
// import { Col, Row, Button, FormGroup, Input } from "reactstrap";
// import axios from "axios";
// import { toast } from "react-toastify";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");

//   const handleChange = ({ target }) => {
//     const { value } = target;
//     setEmail(value);
//   };

//   const handleForgotPassword = async () => {
//     try {
//       const url = `http://localhost:1337/auth/forgot-password`;
//       const data = { email };

//       await axios.post(url, data);

//       toast.success("Password recovery email sent successfully!", {
//         hideProgressBar: true,
//       });
//     } catch (error) {
//       toast.error(error.message, {
//         hideProgressBar: true,
//       });
//     }
//   };

//   return (
//     <Row>
//       <Col sm="12" md={{ size: 4, offset: 4 }}>
//         <div>
//           <h2>Forgot Password:</h2>
//           <FormGroup>
//             <Input
//               type="email"
//               value={email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//             />
//           </FormGroup>
//           <Button color="primary" onClick={handleForgotPassword}>
//             Reset Password
//           </Button>
//         </div>
//       </Col>
//     </Row>
//   );
// };

// export default ForgotPassword;







// ForgotPassword.js
import React, { useState } from "react";
import { Col, Row, Button, FormGroup, Input } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import NewPassword from "./NewPassword"; // Import the new component

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false); // State to conditionally render the new password component
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { value } = target;
    setEmail(value);
  };

  const handleForgotPassword = async () => {
    try {
      const url = `http://localhost:1337/auth/forgot-password`;
      const data = { email };

      // console.log(data);

      await axios.post(url, data);

      toast.success("Password recovery email sent successfully!", {
        hideProgressBar: true,
      });

      // Show the new password component after successfully sending the password recovery request
      setShowNewPassword(true);
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
          <h2>Forgot Password:</h2>
          {!showNewPassword ? (
            <>
              <FormGroup>
                <Input
                  type="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </FormGroup>
              <Button color="primary" onClick={handleForgotPassword}>
                Reset Password
              </Button>
            </>
          ) : (
            <NewPassword />
          )}
        </div>
      </Col>
    </Row>
  );
};

export default ForgotPassword;

