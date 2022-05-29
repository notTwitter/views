import { FC, useEffect, useState } from "react";
import * as S from "./SideMenu.css";

//Reudux imports
import { setSmallerSideMenu } from "../../StateManager/mainSlice";
import {useDispatch, useSelector} from 'react-redux';

//React Icons
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

  //Redux state
  const {smallerSideMenu} = useSelector((state:any)=>state.smallerSideMenu)
  const dispatch = useDispatch()

  //Check which icon to highlight
  const location = useLocation();
  const getIfScreenIsActive = (screen: string): boolean => {
    const currentActiveScreen = location.pathname.split("/")[1];
    if (currentActiveScreen.toLowerCase() === screen.toLowerCase()) {return true;}
    return false;
  };


  //Checking screen size
  const checkScreenSize = ():void => {
    const screenSize = window.innerWidth
    if(screenSize<850 && smallerSideMenu!=true){dispatch(setSmallerSideMenu(true))}
    if(screenSize>850 && smallerSideMenu!=false){dispatch(setSmallerSideMenu(false))}
  }
  useEffect(()=>{
    /*Why remove the event listener after component unmounting?
    *
    *1. On each render event listeneres will be added so there'll be many of them
    *2. Most importantly, event listeners use the state values at the time the EVENT LISTENER WAS FIRST CREATED. The event listener does not recieve or understand changes in state. I like to call it state freeze.
    */
    window.addEventListener('resize', checkScreenSize)
    return () => {
      window.removeEventListener('resize', checkScreenSize)
    }
  })

  // Checking the screen size manually, only on the FIRST RENDER.
  useEffect(()=>{checkScreenSize()}, [])

  return (
    <>
    {/*@ts-ignore -> TODO!!*/}
      <S.Header className="center" smallerSideMenu={smallerSideMenu}>
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
