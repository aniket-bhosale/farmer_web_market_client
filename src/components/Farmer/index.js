import React from "react";
import { Col, Row, Button, FormGroup, Input, Container } from "reactstrap";

import Profile from "../Profile";
import Userdata from "./Userdata";



const Farmer = ({token, city}) => {
  // console.log( "userdata",Userdata.response);

  console.log("city", city);
  return (
    <div style={{marginTop:"90px"}}>

        <Container>
            <Profile token={token} />

            {/* <Userdata token={token} /> */}
          
        </Container>
      {/* Add Farmer dashboard content here */}
    </div>
  );
};

export default Farmer;
