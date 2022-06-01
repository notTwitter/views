import { Link } from "react-router-dom";
import { REGISTER_ROUTE, SERVER } from "../../../frontend.config";

const Register = () => {

  //Register function
  const register = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const payload = {};
    fetch(`${SERVER}/${REGISTER_ROUTE}`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(payload),
    });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          register(e);
        }}
      >
        <input type="text" name="username" id="" />
        <label htmlFor="username">Username</label>
        <input type="password" />
        <label htmlFor="password">Password</label>
        <button>Submit</button>
      </form>
      <Link to="/login">Login</Link>
    </>
  );
};

export default Register;
