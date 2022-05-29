import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { SERVER } from "../../frontend.config";

//Types
export type CredentialsPropType = {
  isLogin: boolean
}

const Login:FC<CredentialsPropType> = (props) => {


  const login = (): void => {
    fetch(`${SERVER}/test/login`, { credentials: "include" });
  };

  return (
    <>
      {
        props.isLogin
          ?   <button onClick={() => login()}>Login</button>
          :    'Nah'
      }
      <Link to='/register'>Register</Link>
    </>
  );
};

export default Login
