import { Link } from 'react-router-dom';
import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import { inherits } from 'util';

export const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: max(25%, 400px);
  height: 100vh;
  overflow-y: scroll;
  background-color: black;
  color: white;
  justify-content: flex-end;
`;

export const Nav = styled.nav`
  height: 90%;
  width: 65%;
  display: flex;
  flex-direction: column;
  align-content: center;
  color: inherit;
`;

export const Logo = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
`;

export const UL = styled.ul`
  margin-top: max(1vw, 10px);
  width: 100%;
  height: auto;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  color: inherit;

`;

export const LI = styled.li`
    color: inherit;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
`;

export const NavLink = styled(Link)`
    color: inherit;
    font-size: 1.3em;
    
    &:hover{
      cursor: pointer;
      background-color: #252525;
    }
`;
