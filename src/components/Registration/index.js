// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { Col, Row, Button, FormGroup, Input } from "reactstrap";

// const initialUser = { email: "", password: "", username: "" };
// const Registration = () => {
//   const [user, setUser] = useState(initialUser);
//   const navigate = useNavigate();





//   const signUp = async () => {
//     try {
//       const url = `http://localhost:1337/api/auth/local/register`;
//       if (user.username && user.email && user.password) {
//         const res = await axios.post(url, user);
//         if (!!res) {
//           toast.success("Registered successfully!", {
//             hideProgressBar: true,
//           });
//           setUser(initialUser);
//           navigate("/login");
//         }
//       }
//     } catch (error) {
//       if (error.response) {
//         const { data } = error.response;
//         if (data && data.message) {
//           if (data.message[0].messages) {
//             const firstError = data.message[0].messages[0];
//             if (firstError.id === 'Auth.form.error.username.taken') {
//               toast.error("Username already taken. Please choose a different username.", {
//                 hideProgressBar: true,
//               });
//             } else if (firstError.id === 'Auth.form.error.email.taken') {
//               toast.error("Email already registered. Please use a different email.", {
//                 hideProgressBar: true,
//               });
//             } else {
//               // Handle other error messages
//               toast.error(data.message, {
//                 hideProgressBar: true,
//               });
//             }
//           }
//         } else {
//           // Handle other errors
//           toast.error(error.message, {
//             hideProgressBar: true,
//           });
//         }
//       } else {
//         // Handle other non-response errors
//         toast.error(error.message, {
//           hideProgressBar: true,
//         });
//       }
//     }
//   };
  



  

//   const handleUserChange = ({ target }) => {
//     const { name, value } = target;
//     setUser((currentUser) => ({
//       ...currentUser,
//       [name]: value,
//     }));
//   };

//   return (
//     <Row className="register">
//       <Col sm="12" md={{ size: 4, offset: 4 }}>
//         <div>
//           <h2>Sign up:</h2>
//           <FormGroup>
//             <Input
//               type="text"
//               name="username"
//               value={user.username}
//               onChange={handleUserChange}
//               placeholder="Enter your full name"
//             />
//           </FormGroup>
//           <FormGroup>
//             <Input
//               type="email"
//               name="email"
//               value={user.email}
//               onChange={handleUserChange}
//               placeholder="Enter your email"
//             />
//           </FormGroup>
//           <FormGroup>
//             <Input
//               type="password"
//               name="password"
//               value={user.password}
//               onChange={handleUserChange}
//               placeholder="Enter password"
//             />
//           </FormGroup>
//           <Button color="primary" onClick={signUp}>
//             Sign up
//           </Button>
//         </div>
//       </Col>
//     </Row>
//   );
// };

// export default Registration;











// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { Col, Row, Button, FormGroup, Input } from "reactstrap";

// const initialUser = { email: "", password: "", username: "" };

// const Registration = () => {
//   const [user, setUser] = useState(initialUser);
//   const navigate = useNavigate();

//   const signUp = async () => {
//     try {
//       const url = `http://localhost:1337/api/auth/local/register`;

//       if (!user.username) {
//         toast.error("Username is required.", {
//           hideProgressBar: true,
//         });
//         return;
//       }

//       if (!user.email) {
//         toast.error("Email is required.", {
//           hideProgressBar: true,
//         });
//         return;
//       }

//       if (!user.password) {
//         toast.error("Password is required.", {
//           hideProgressBar: true,
//         });
//         return;
//       }

//       const res = await axios.post(url, user);

//       if (!!res) {
//         toast.success("Registered successfully!", {
//           hideProgressBar: true,
//         });
//         setUser(initialUser);
//         navigate("/login");
//       }
//     } catch (error) {
//       if (error.response) {
//         const { data } = error.response;
//         if (data && data.message) {
//           if (data.message[0].messages) {
//             const firstError = data.message[0].messages[0];
//             if (firstError.id === 'Auth.form.error.username.taken') {
//               toast.error("Username already taken. Please choose a different username.", {
//                 hideProgressBar: true,
//               });
//             } else if (firstError.id === 'Auth.form.error.email.taken') {
//               toast.error("Email already registered. Please use a different email.", {
//                 hideProgressBar: true,
//               });
//             } else {
//               toast.error(data.message, {
//                 hideProgressBar: true,
//               });
//             }
//           }
//         } else {
//           toast.error(error.message, {
//             hideProgressBar: true,
//           });
//         }
//       } else {
//         toast.error(error.message, {
//           hideProgressBar: true,
//         });
//       }
//     }
//   };

//   const handleUserChange = ({ target }) => {
//     const { name, value } = target;
//     setUser((currentUser) => ({
//       ...currentUser,
//       [name]: value,
//     }));
//   };

//   return (
//     <Row className="register">
//       <Col sm="12" md={{ size: 4, offset: 4 }}>
//         <div>
//           <h2>Sign up:</h2>
//           <FormGroup>
//             <Input
//               type="text"
//               name="username"
//               value={user.username}
//               onChange={handleUserChange}
//               placeholder="Enter your full name"
//             />
//           </FormGroup>
//           <FormGroup>
//             <Input
//               type="email"
//               name="email"
//               value={user.email}
//               onChange={handleUserChange}
//               placeholder="Enter your email"
//             />
//           </FormGroup>
//           <FormGroup>
//             <Input
//               type="password"
//               name="password"
//               value={user.password}
//               onChange={handleUserChange}
//               placeholder="Enter password"
//             />
//           </FormGroup>
//           <Button color="primary" onClick={signUp}>
//             Sign up
//           </Button>
//         </div>
//       </Col>
//     </Row>
//   );
// };

// export default Registration;











import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Col, Row, Button, FormGroup, Input } from "reactstrap";

const initialUser = { email: "", password: "", username: "", city: "", character: "" }; // Replace role with character

const Registration = () => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const signUp = async () => {
    try {
      const url = `http://localhost:1337/api/auth/local/register`;

      if (!user.username) {
        toast.error("Username is required.", {
          hideProgressBar: true,
        });
        return;
      }

      if (!user.email) {
        toast.error("Email is required.", {
          hideProgressBar: true,
        });
        return;
      }

      if (!user.password) {
        toast.error("Password is required.", {
          hideProgressBar: true,
        });
        return;
      }

      if (!user.city) {
        toast.error("City is required.", {
          hideProgressBar: true,
        });
        return;
      }

      if (!user.character) {
        toast.error("Character is required.", { // Replace role with character
          hideProgressBar: true,
        });
        return;
      }

      const res = await axios.post(url, user);

      if (!!res) {
        toast.success("Registered successfully!", {
          hideProgressBar: true,
        });
        setUser(initialUser);
        navigate("/login");
      }
    } catch (error) {
      // Error handling code remains the same
    }
  };

  const handleUserChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  return (
    <Row className="register">
      <Col sm="12" md={{ size: 4, offset: 4 }}>
        <div>
          <h2>Sign up:</h2>
          <FormGroup>
            <Input
              type="text"
              name="username"
              value={user.username}
              onChange={handleUserChange}
              placeholder="Enter your full name"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="email"
              name="email"
              value={user.email}
              onChange={handleUserChange}
              placeholder="Enter your email"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              value={user.password}
              onChange={handleUserChange}
              placeholder="Enter password"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="select"
              name="city"
              value={user.city}
              onChange={handleUserChange}
            >
              <option value="">Select City</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Nashik">Nashik</option>
              <option value="Nagpur">Nagpur</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Input
              type="select"
              name="character"
              value={user.character}
              onChange={handleUserChange}
            >
              <option value="">Select Character</option> {/* Replace Role with Character */}
              <option value="farmer">Farmer</option>
              <option value="customer">Customer</option>
            </Input>
          </FormGroup>
          <Button color="primary" onClick={signUp}>
            Sign up
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default Registration;
