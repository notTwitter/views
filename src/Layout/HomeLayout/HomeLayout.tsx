import { Outlet } from "react-router-dom";
import SideMenu from "../../Common/SideMenu/SideMenu";
import * as S from "./HomeLayout.css";

const HomeLayout = () => {
  return (
    <>
    <S.MainSection id="main">
        <SideMenu />
        <S.OutletContainer>
          <Outlet />
        </S.OutletContainer>
      </S.MainSection>
    </>
  );
};

export default HomeLayout;
