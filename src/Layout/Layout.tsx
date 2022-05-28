import { FC } from "react";
import { Link, Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
