import { FC } from "react";
import {Link} from 'react-router-dom'
import * as S from './Header.css'

const Header: FC = () => {
  return (
    <>
    <S.Header className="center">
      <S.Nav>
         <S.Logo></S.Logo>
         <S.UL>
          <S.LI><S.NavLink to=''>Home</S.NavLink></S.LI>
          <S.LI><S.NavLink to='/notifications'>Notifications</S.NavLink></S.LI>
          <S.LI><S.NavLink to='/messages'>Messages</S.NavLink></S.LI>
          <S.LI><S.NavLink to='/profile'>Profile</S.NavLink></S.LI>
          <S.LI><S.NavLink to='/more'>More</S.NavLink></S.LI>
         </S.UL>
      </S.Nav>
    </S.Header>
    </>
  )
};

export default Header;

