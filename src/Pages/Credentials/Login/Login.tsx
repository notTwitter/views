import { Link } from "react-router-dom";
import { LOGIN_ROUTE, SERVER } from "../../../frontend.config";

const Login = () => {

  //Login function
  const login = (e:React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const payload = {}
    fetch(`${SERVER}/${LOGIN_ROUTE}`, {
        method: 'GET', 
        credentials: "include",
        body: JSON.stringify(payload)
     });
  };

  return (
    <>
        <form onSubmit={(e)=>{login(e)}}>
            <input type="text" name="username" id="" />
            <label htmlFor="username">Username</label>
            <input type="password" />
            <label htmlFor="password">Password</label>
            <button>Submit</button>
        </form>
        <Link to='/register'>Register</Link>
    </>
  )
}

export default Login