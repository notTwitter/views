import { Link } from "react-router-dom";
import styled from "styled-components";

// Project constants
import {
  SIDEMENU_BREAK_POINT,
  SMALL_SIDEMENU_WIDTH,
} from "../../frontend.config";

export const Header = styled.header`
  position: sticky;
  left: 0;
  top: 0;
  z-index: 99;
  width: 25%;
  max-width: 300px;
  min-width: 200px;
  height: 100vh;
  color: white;
  overflow-y: scroll;
  background-color: black;
  justify-content: center;
  border-right: 1px solid rgb(47, 51, 54);

  //Removing the scroll bar
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media all and (max-width: ${`${SIDEMENU_BREAK_POINT}px`}) {
    flex-shrink: 0;                                                 /* <= This is important for the textbox in CreateTweet*/
    //Make the menu smaller
    & {
      width: ${`${SMALL_SIDEMENU_WIDTH}px`};
      min-width: 0;
    }
    & ul a span,
    & button {
      display: none;
    }
  }

  @media only screen and (max-width: 500px) {
    & {
      position: fixed;
      display: flex;
      height: 80px;
      width: 100vw;
      border-right: none;
      border-top: 1px solid gray;
      bottom: 0px;
      top: calc(100vh - 80px);
      /* background-color: red; */
      max-width: none;
    }
  }
`;

export const Nav = styled.nav`
  height: 90%;
  width: 90%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  color: inherit;
`;

export const Logo = styled.div`
  height: 70px;
  width: 50px; /*Changing the 50px breaks the alignment. Fix later!*/
  overflow: hidden;
  flex-shrink: 0;
  & img {
    height: 55%;
    transform: translateX(5%);
  }

  @media all and (max-width: ${`${SIDEMENU_BREAK_POINT}px`}) {
    //To center the logo
    width: 100%;
    & img {
      transform: none;
    }
  }

  @media only screen and (max-width: 500px) {
    & {
      display: none;
    }
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

  @media only screen and (max-width: 500px) {
    & {
      flex-direction: row;
      justify-content: space-between;
      height: 100%;
    }
  }
`;

export const LI = styled.li`
  color: inherit;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 500px) {
    & {
      height: 100%;
    }
  }
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

  @media all and (max-width: ${`${SIDEMENU_BREAK_POINT}px`}) {
    //Adjusting the buttons at the break point
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 100%;
    & svg {
      margin: 0;
    }
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
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(0.8);
  }

  @media only screen and (max-width: 500px) {
    & {
      display: none;
    }
  }
`;
