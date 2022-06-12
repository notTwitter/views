import { Link, useNavigate } from "react-router-dom";
import * as S from './Login.css'
import { LOGIN_ROUTE, REGISTER_ROUTE, SERVER } from "../../../frontend.config";
import React, { MouseEvent, useRef } from "react";
import { setIsLoggedIn } from "../../../StateManager/mainSlice";
import { useDispatch } from "react-redux";

const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userNameInput = useRef(null)
  const passWordInput = useRef(null)

  //Login function
  const loginUser = (): void => {
    const payload = {
      //@ts-ignore
      userName: userNameInput.current?.value,
      //@ts-ignore
      passWord: passWordInput.current?.value
    }
    fetch(`${SERVER}/${LOGIN_ROUTE}`, {
        method: 'POST', 
        credentials: "include", //<- Makes sure cookies are being sent,
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Method' : 'POST',
        }
     })
     .then((res)=> {return res.json()})
     .then((data)=> {
        dispatch(setIsLoggedIn(data.isLoggedIn))
        navigate('/', {replace: false})
      })
  };

  //Join function
  const joinUser = ():void => {
    const payload = {
      //@ts-ignore
      userName: userNameInput.current?.value,
      //@ts-ignore
      passWord: passWordInput.current?.value
    }
    fetch(`${SERVER}/${REGISTER_ROUTE}`, {
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(payload)
    })
    .then(res => {return res.json()})
    .then(data => {
      if(data.success===true || data.userAlreadyExists===true){
        navigate('/', {replace: false})
      }
    })
  }

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
          <input type="text" name="username" ref={userNameInput} onChange={(e)=>checkAndMoveLabel(e)}/>
          <label htmlFor="username" onClick={(e)=>focusInput(e)}>Username</label>
        </S.InputContainer>
        <S.InputContainer>
          <input type="password" name="password" ref={passWordInput} onChange={(e)=>checkAndMoveLabel(e)}/>
          <label htmlFor="password" onClick={(e)=>focusInput(e)}>Password</label>
        </S.InputContainer>
        <S.Button className="center" bgColor="#1D9AEE" onClick={loginUser}>Log in</S.Button>
        <S.Button className="center" bgColor="#1D3EEE" onClick={joinUser}>Join</S.Button>
        <S.Button className="center" bgColor="#681DEE" onClick={useGuestAccount}>Guest</S.Button>
      </S.LoginForm>
    </>
  )
}

export default Login