import { FC, useState } from "react";
import Login from "./Login/Login";
import Register from './Register/Register'
import { Link } from "react-router-dom";

//Types
type CredentialsPropType = {
  isLogin: boolean
}

const Credentials:FC<CredentialsPropType> = (props) => {

  return (
    <>
      {
        props.isLogin
          ?   <Login/>
          :   <Register/>
      }
    </>
  );
};

export default Credentials
