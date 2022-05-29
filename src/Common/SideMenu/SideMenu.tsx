import { FC } from "react";
import * as S from "./SideMenu.css";
import twitterIcon from "./../../Assets/twitterIcon.png";
import { useLocation } from "react-router-dom";
import { RiHome6Line } from "react-icons/ri";
import { RiHome6Fill } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { AiFillBell } from "react-icons/ai";
import { RiChat1Line } from "react-icons/ri";
import { RiChat1Fill } from "react-icons/ri";
import { MdPerson } from "react-icons/md";
import { MdPersonOutline } from "react-icons/md";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";

const SideMenu: FC = () => {
  //Get browser path
  const location = useLocation();

  //Check which icon to highlight
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
