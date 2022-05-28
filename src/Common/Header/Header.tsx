import { FC } from "react";
import {Link} from 'react-router-dom'
import * as S from './Header.css'

const Header: FC = () => {
  return (
    <>
    <S.Header>
      <S.Nav>
         Header
      </S.Nav>
    </S.Header>
    </>
  )
};

export default Header;
