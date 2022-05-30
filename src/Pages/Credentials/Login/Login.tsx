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
          <input type="text" />
        </S.InputContainer>
      </S.LoginForm>
    </>
  )
}

export default Login