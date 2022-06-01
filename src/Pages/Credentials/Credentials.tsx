import { FC, useState } from "react";
import Login from "./Login/Login";
import Register from './Register/Register'
import { Link } from "react-router-dom";
import * as S from './Credentials.css'

//Background image
import credentialsBackground from '../../Assets/credentialsBackground.jpg'

//Types
type CredentialsPropType = {
  isLogin: boolean
}

const Credentials:FC<CredentialsPropType> = (props) => {

  return (
    <S.MainSection>
      <S.ImageSection>
        <S.ImageContainer className="center">
          <img src={credentialsBackground} alt="" />
        </S.ImageContainer>
      </S.ImageSection>
      <S.ContentSection>
        <S.InnerSection>
          <S.Title>
            <h1><span>not</span>Twitter</h1>
          </S.Title>
          {
            props.isLogin
              ?   <Login/>
              :   <Register/>
          }
        </S.InnerSection>
      </S.ContentSection>
    </S.MainSection>
  );
};

export default Credentials
