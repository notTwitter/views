import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "../../Common/SideMenu/SideMenu";
import { MOBILE_BREAK_POINT } from "../../frontend.config";
import * as S from "./HomeLayout.css";

//Redux imports
import {useSelector, useDispatch} from 'react-redux'
import { InterfaceReduxState, setIsMobile } from "../../StateManager/mainSlice";

const HomeLayout = () => {

  //Setting up redux
  const reduxState = useSelector((state:InterfaceReduxState)=> state.isMobile)
  const dispatch = useDispatch()

  /*       Javascript media query to check whether the screen is mobile dimensions

  *       Using a **toggle** inside of the query function as the function is called **whenever** the screen size 
  *  moves through the mobile width border; i.e, both up and down.
  *  The listener will only be called on the first render. There is no need to re-assign an event listener each time
  *  because the event listener will not be consulting the current state. There is no need to worry about 'state freeze' (definition inside /retconned/sideMenu.md)
  * 
  *       Will have to set a definitive value for isMobile on the very first render,
  *  so will be creating the reducer to accept a toggle & a definitive set in state.
  */

  //The check function
  const toggleMobile = ():void=> {
    dispatch(setIsMobile(null))
  }
  //Setting the query in the first render
  useEffect(() => {
    const mobileCheck = window.matchMedia(`(max-width:${MOBILE_BREAK_POINT}px)`)
    mobileCheck.addEventListener('change', toggleMobile)

    //Making a FIRST render check
    window.innerWidth<MOBILE_BREAK_POINT
      ? dispatch(setIsMobile(true))
      : dispatch(setIsMobile(false))

    //Cleanup function
    return ()=> {
      mobileCheck.removeEventListener('change', toggleMobile)
    }
  }, [])
 
  return (
    <>
    <S.MainSection id="main">
        <SideMenu />
        <S.OutletContainer>
          <Outlet />
        </S.OutletContainer>
    </S.MainSection>
    </>
  );
};

export default HomeLayout;
