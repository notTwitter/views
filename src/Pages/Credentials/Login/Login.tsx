import { Link, useNavigate } from "react-router-dom";
import * as S from './Login.css'
import { LOGIN_ROUTE, SERVER } from "../../../frontend.config";
import React, { MouseEvent, useRef } from "react";
import { setIsLoggedIn } from "../../../StateManager/mainSlice";
import { useDispatch } from "react-redux";

const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  //Login function
  const loginUser = (): void => {
    const payload = {}
    fetch(`${SERVER}/${LOGIN_ROUTE}`, {
        method: 'POST', 
        credentials: "include", //<- Makes sure cookies are being sent
     })
     .then((res)=> {return res.json()})
     .then((data)=> {
        dispatch(setIsLoggedIn(data.isLoggedIn))
        navigate('/', {replace: false})
      })
  };

  //Continue as guest function
  const useGuestAccount = () => {
    dispatch(setIsLoggedIn(true))
    navigate('/', {replace: false})
  }

  //Focus input function -> When you click on lable focuses input
  const focusInput = (e: React.MouseEvent):void => {
    // @ts-ignore
    const siblingInputElement = e.target.closest('div').querySelector('input')
    siblingInputElement.focus()
  }

  //Check and move function
  const checkAndMoveLabel = (e:any):void=>{
    if(e.target.value!='' && e.target.classList.contains('move')===false){
      e.target.classList.add('move')
    }
    else if(e.target.value=='' && e.target.classList.contains('move')===true){
      e.target.classList.remove('move')
    }
  }

  return (
    /*
    * Note that we are now inside the 'S.InnerSection Component'. This component is a sibling to 'S.Title'
    */
    <>
      <S.LoginForm onSubmit={(e)=> e.preventDefault()}>
        <S.InputContainer>
          <input type="text" name="username" onChange={(e)=>checkAndMoveLabel(e)}/>
          <label htmlFor="username" onClick={(e)=>focusInput(e)}>Username</label>
        </S.InputContainer>
        <S.InputContainer>
          <input type="password" name="password" onChange={(e)=>checkAndMoveLabel(e)}/>
          <label htmlFor="password" onClick={(e)=>focusInput(e)}>Password</label>
        </S.InputContainer>
        <S.Button className="center" bgColor="#1D9AEE" onClick={loginUser}>Log in</S.Button>
        <S.Button className="center" bgColor="#1D3EEE">Join</S.Button>
        <S.Button className="center" bgColor="#681DEE" onClick={useGuestAccount}>Continue as Guest [Click This]</S.Button>
      </S.LoginForm>
    </>
  )
}

export default Login