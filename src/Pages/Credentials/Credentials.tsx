import { FC, useState } from "react";
import Login from "./Login/Login";
import { Link } from "react-router-dom";
import * as S from './Credentials.css'

//Background image
import credentialsBackground from '../../Assets/credentialsBackground.jpg'

//Types
type CredentialsPropType = {
  isLogin: boolean
}

const Credentials:FC = () => {

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
          <Login/>
        </S.InnerSection>
      </S.ContentSection>
    </S.MainSection>
  );
};

export default Credentials
