import { FC } from "react";
import { Link, Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Outlet />
    </>
  );
};

export default Layout;
