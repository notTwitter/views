import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  position: absolute;
  left: 0;
  top: 0;
  width: 25%;
  max-width: 300px;
  min-width: 200px;
  height: 100vh;
  overflow-y: scroll;
  background-color: black;
  color: white;
`;

export const Nav = styled.nav`
  height: 90%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-content: center;
  color: inherit;
`;

export const Logo = styled.div`
  width: 50px;
  height: 70px;
  overflow: hidden;
  flex-shrink: 0;
  & img {
    height: 55%;
  }
`;

export const UL = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  height: 80%;
  width: auto;
  display: flex;
  align-items: center;
  padding: 0 15px;
  border-radius: 10px;
  width: 100%;

  & span {
    height: fit-content;
    color: inherit;
    font-size: 1.2em;
    font-weight: 500;
  }
  &:hover {
    cursor: pointer;
    background-color: #252525;
  }
  & svg {
    height: 60%;
    margin-right: 10px;
    width: 30px;
  }
`;

export const TweetButton = styled.button`
  width: min(200px, 80%);
  height: 70%;
  border: 0;
  outline: 0;
  border-radius: 30px;
  color: inherit;
  font-size: 1.2em;
  font-weight: 600;
  background-color: rgb(29, 155, 240);
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`;
