import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import LoadingScreen from "../Common/LoadingScreen/LoadingScreen";
import { CHECK_AUTH_ROUTE, SERVER } from "../frontend.config";
import { InterfaceReduxState } from "../StateManager/mainSlice";
import { setIsLoggedIn } from "../StateManager/mainSlice";

const Auth: FC = () => {
  //Redux states
  //@ts-ignore -> {isLoggedIn} gives a typeerror, but it does work
  const { isLoggedIn } = useSelector(
    (state: InterfaceReduxState) => state.isLoggedIn
  );
  const dispatch = useDispatch();

  //Checking backend
  if (isLoggedIn != true) {
    fetch(`${SERVER}/${CHECK_AUTH_ROUTE}`, { credentials: "include" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(setIsLoggedIn(data.isLoggedIn));
      });
  }

  //Setting FAKE loading screen for 1 second. This is to simulate the time taken for the api call. <- Remove when coupling the backend + ONLY on the first time, when isLoggedIn is null
  //As of now, everytime the page is refreshed, the user is redirected to the login page. This will NOT HAPPEN when connected to thebackend.
  // if(isLoggedIn===null){setTimeout(()=>{dispatch(setIsLoggedIn(false))}, 1000)}

  if (isLoggedIn === null) {
    return <LoadingScreen />;
  } else {
    return <>{isLoggedIn ? <Outlet /> : <Navigate to="login" />}</>;
  }
};

export default Auth;
