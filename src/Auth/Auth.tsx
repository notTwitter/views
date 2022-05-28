import { FC } from "react";
import { Outlet } from "react-router-dom";

const Auth: FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Auth;
