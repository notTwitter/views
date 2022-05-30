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
  const reduxState = useSelector((state:InterfaceReduxState)=> state.isMobile)     // redux state is the complete state object. There is an error when you try to desctructure it
  const dispatch = useDispatch()

  //The query initilization
  const toggleMobile = ():void=> {
    dispatch(setIsMobile(null))
  }
  //Setting the query in the first render. It persists throughtout renders.
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
