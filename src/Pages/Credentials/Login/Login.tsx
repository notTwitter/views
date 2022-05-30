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
    * Note that we are now inside the 'InnerSection Component'. This component is a sibling to 'Title'
    */
   <></>
  )
}

export default Login