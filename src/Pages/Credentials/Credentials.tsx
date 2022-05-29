import { FC, useState } from "react";
import Login from "./Login/Login";
import Register from './Register/Register'
import { Link } from "react-router-dom";
import * as S from './Credentials.css'

//Types
type CredentialsPropType = {
  isLogin: boolean
}

const Credentials:FC<CredentialsPropType> = (props) => {

  return (
    <S.MainSection>
      <S.ImageSection></S.ImageSection>
      <S.ContentSection>
        {
        props.isLogin
          ?   <Login/>
          :   <Register/>
        }
      </S.ContentSection>
    </S.MainSection>
  );
};

export default Credentials
