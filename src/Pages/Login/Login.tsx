import { FC } from "react";
import { SERVER } from "../../frontend.config";

const Login: FC = () => {
  const login = (): void => {
    fetch(`${SERVER}/test/login`, { credentials: "include" });
  };
  const logout = (): void => {
    fetch(`${SERVER}/test/logout`, { credentials: "include" });
  };
  return (
    <>
      <button onClick={() => login()}>Login</button>
      <button onClick={() => logout()}>Logout</button>
    </>
  );
};

export default Login
