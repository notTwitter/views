import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import LoadingScreen from "../Common/LoadingScreen/LoadingScreen";
import {SERVER} from '../frontend.config'
import { InterfaceReduxState } from "../StateManager/mainSlice";
import { setIsLoggedIn } from "../StateManager/mainSlice";

const Auth: FC = () => {

  // this is good but will reset every time they refresh the browser
  // we probably need to save a cooky or a json web token to still validate them
  // after they close the tab

  //Redux states
  //@ts-ignore -> {isLoggedIn} gives a typeerror, but it does work
  const {isLoggedIn} = useSelector((state:InterfaceReduxState)=> state.isLoggedIn)
  const dispatch = useDispatch()


  //Checking backend
  fetch(`${SERVER}/test/checkAuth`, { credentials: "include" })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // setIsLoggedIn(data.isLoggedIn);
    });

  //Setting FAKE loading screen for 1 second. This is to simulate the time taken for the api call. <- Remove when coupling the backend + ONLY on the first time, when isLoggedIn is null
  if(isLoggedIn===null){setTimeout(()=>{dispatch(setIsLoggedIn(false))}, 1000)}

  if(isLoggedIn===null){
    return(<LoadingScreen/>)
  }
  else{ return (
    <>
      {
        isLoggedIn ? <Outlet /> : <Navigate to='login'/>
      }
    </>
  );}
};

export default Auth;
