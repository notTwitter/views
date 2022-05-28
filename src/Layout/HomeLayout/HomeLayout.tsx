import { Outlet } from "react-router-dom";
import SideMenu from "../../Common/SideMenu/SideMenu";
import * as S from "./HomeLayout.css";

const HomeLayout = () => {
  return (
    <>
      <h1>Helo</h1>
      <SideMenu />
      <S.OutletContainer id="main">
        <Outlet />
      </S.OutletContainer>
    </>
  );
};

export default HomeLayout;
