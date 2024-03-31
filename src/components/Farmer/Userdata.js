// import React from "react";
// import { Card, CardBody, CardTitle, CardText } from "reactstrap";

// function Userdata({ orders }) {
//   return (
//     <Card className="shadow">
//       <CardBody>
//         <CardTitle tag="h5">All Orders</CardTitle>
//         {orders.map((order) => (
//           <div key={order.id}>
//             <CardText><strong>Name:</strong> {order.createdAt}</CardText>
//             <CardText><strong>City:</strong> {order.email}</CardText>
//             <CardText><strong>Order ID:</strong> {order.orderId}</CardText>
//             <CardText><strong>Product:</strong> {order.product}</CardText>
//             {/* Add more order information as needed */}
//           </div>
//         ))}
//       </CardBody>
//     </Card>
//   );
// }

// export default Userdata;






// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';

// function Userdata( farmercity,farmerrole ) {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get("http://localhost:1337/api/users");
//         setUsers(response.data);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div>
//       <h2>All Users</h2>
//       <Row>
//         {users.map((user) => (
//           <Col key={user.id} md={4} className="mb-3">
//             <Card>
//               <CardBody>
//                 <CardTitle tag="h5">User Name: {user.username}</CardTitle>
//                 <CardText>Email: {user.email}</CardText>
//                 <CardText>Role: {user.character}</CardText>
//                 <CardText>City: {user.city}</CardText>
//               </CardBody>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// }

// export default Userdata;



import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';

function Userdata({ farmercity, farmerrole }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/users");
        // Filter users based on farmercity and farmerrole
        const filteredUsers = response.data.filter(user => {
          return user.city === farmercity && user.character !== farmerrole;
        });
        setUsers(filteredUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [farmercity, farmerrole]); // Include farmercity and farmerrole in the dependency array

  return (
    <div>
      <h2>All Users</h2>
      <Row>
        {users.map((user) => (
          <Col key={user.id} md={4} className="mb-3">
            <Card>
              <CardBody>
                <CardTitle tag="h5">User Name: {user.username}</CardTitle>
                <CardText>Email: {user.email}</CardText>
                <CardText>Role: {user.character}</CardText>
                <CardText>City: {user.city}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Userdata;









