import axios from "axios";
import React, { useState, useEffect } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import UpoloadAvatar from "./UploadAvatar";
import { Container } from "reactstrap";
import Userdata from "../Farmer/Userdata";

const Profile = ({ token }) => {
  const [user, setUser] = useState({});
  const [farmercity,setfarmercity] = useState({});

  const [farmerRole,setfarmerRole] = useState({});

  const [isUserUpdated, setisUserUpdated] = useState(false);

  useEffect(() => {
    const getProfileData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:1337/api/users/me`, {
          headers: {
            Authorization: `bearer ${token}`,
          },
        });
        setUser(data);
        setisUserUpdated(false);

        // console.log("data",data.character);

        // const farmercity = data.character;
        setfarmercity(data.city);
        setfarmerRole(data.character);

        // console.log(setfarmercity);

      } catch (error) {
        console.log({ error });
      }
    };
    getProfileData();
  }, [token, isUserUpdated]);

  return (
    <Container>
    <div className="profile" style={{marginTop:"100px"}}>
      <div className="avatar">
        <div className="avatar-wrapper">
          {user.avatarUrl ? (
            <img
              src={`http://localhost:1337${user.avatarUrl}`}
              alt={`${user.username} avatar`}
            />
          ) : (
            <IoPersonCircleOutline />
          )}
          <UpoloadAvatar
            token={token}
            userId={user.id}
            role={user.character}
            username={user.username}
            avatarUrl={user.avatarUrl}
            setisUserUpdated={setisUserUpdated}
          />
        </div>
      </div>
      <div className="body">
        <p>Name: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Role: {user.character}</p>
        <p>City: {user.city}</p>
        <p>
          Account created at: {new Date(user.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>


        <Userdata farmercity={farmercity} farmerrole={farmerRole} />
        
    </Container>
  );
};

export default Profile;