import { FC } from "react";
import { AiFillBell, AiOutlineBell } from "react-icons/ai";
import {
  HiDotsCircleHorizontal,
  HiOutlineDotsCircleHorizontal,
} from "react-icons/hi";
import { MdPerson, MdPersonOutline } from "react-icons/md";
import {
  RiChat1Fill,
  RiChat1Line,
  RiHome6Fill,
  RiHome6Line,
} from "react-icons/ri";
import { useLocation } from "react-router-dom";
import twitterIcon from "./../../Assets/twitterIcon.png";
import * as S from "./SideMenu.css";

const SideMenu: FC = () => {
  const location = useLocation();

  const getIfScreenIsActive = (screen: string): boolean => {
    const currentActiveScreen = location.pathname.split("/")[1];

    if (currentActiveScreen.toLowerCase() === screen.toLowerCase()) {
      return true;
    }
    return false;
  };

  return (
    <>
      <S.Header className="center">
        <S.Nav>
          <S.Logo className="center">
            <img src={twitterIcon} alt="Twitter Logo" />
          </S.Logo>
          <S.UL>
            <S.LI>
              <S.NavLink to="">
                {getIfScreenIsActive("") ? <RiHome6Fill /> : <RiHome6Line />}
                <span>Home</span>
              </S.NavLink>
            </S.LI>
            <S.LI>
              <S.NavLink to="/notifications">
                {getIfScreenIsActive("notifications") ? (
                  <AiFillBell />
                ) : (
                  <AiOutlineBell />
                )}

                <span>Notifications</span>
              </S.NavLink>
            </S.LI>
            <S.LI>
              <S.NavLink to="/messages">
                {getIfScreenIsActive("messages") ? (
                  <RiChat1Fill />
                ) : (
                  <RiChat1Line />
                )}{" "}
                <span>Messages</span>
              </S.NavLink>
            </S.LI>
            <S.LI>
              <S.NavLink to="/profile">
                {getIfScreenIsActive("profile") ? (
                  <MdPerson />
                ) : (
                  <MdPersonOutline />
                )}
                <span>Profile</span>
              </S.NavLink>
            </S.LI>
            <S.LI>
              <S.NavLink to="/more">
                {getIfScreenIsActive("more") ? (
                  <HiDotsCircleHorizontal />
                ) : (
                  <HiOutlineDotsCircleHorizontal />
                )}
                <span>More</span>
              </S.NavLink>
            </S.LI>
            <S.LI>
              <S.TweetButton>Tweet</S.TweetButton>
            </S.LI>
          </S.UL>
        </S.Nav>
      </S.Header>
    </>
  );
};

export default SideMenu;
