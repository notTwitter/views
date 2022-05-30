import { FC, useState } from "react";
import Login from "./Login/Login";
import Register from './Register/Register'
import { Link } from "react-router-dom";
import * as S from './Credentials.css'

//Background image
import credentialsBackground from '../../Assets/twitterLoginImage.png'

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
