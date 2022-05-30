import { Link } from "react-router-dom";
import * as S from './Login.css'
import { LOGIN_ROUTE, SERVER } from "../../../frontend.config";

const Login = () => {

  //Referencing the input fields

  //Login function
  const login = (e:React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const payload = {}
    fetch(`${SERVER}/${LOGIN_ROUTE}`, {
        method: 'POST', 
        credentials: "include",
        body: JSON.stringify(payload)
     });
  };

  return (
    /*
    * Note that we are now inside the 'S.InnerSection Component'. This component is a sibling to 'S.Title'
    */
    <>
      <S.LoginForm>
        <S.InputContainer>
          <input type="text" name="username" />
          <label htmlFor="username">Username[Labels are buggy]</label>
        </S.InputContainer>
        <S.InputContainer>
          <input type="password" name="password" />
          <label htmlFor="password">Password</label>
        </S.InputContainer>
        <S.Button className="center" bgColor="#1D9AEE">Log in</S.Button>
        <S.Button className="center" bgColor="#1D3EEE">Join</S.Button>
        <S.Button className="center" bgColor="#681DEE">Continue as Guest</S.Button>
      </S.LoginForm>
    </>
  )
}

export default Login