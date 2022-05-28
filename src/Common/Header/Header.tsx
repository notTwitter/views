
/* eslint-disable react/function-component-definition */
import { FC } from 'react';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';
import * as S from './Header.css';

const Header: FC = () => (
  <S.Header className="center">
    <S.Nav>
      <S.Logo />
      <S.UL>
        <S.LI><S.NavLink to="">Home</S.NavLink></S.LI>
        <S.LI><S.NavLink to="/notifications">Notifications</S.NavLink></S.LI>
        <S.LI><S.NavLink to="/messages">Messages</S.NavLink></S.LI>
        <S.LI><S.NavLink to="/profile">Profile</S.NavLink></S.LI>
        <S.LI><S.NavLink to="/more">More</S.NavLink></S.LI>
      </S.UL>
    </S.Nav>
  </S.Header>
);
  
export default Header;
