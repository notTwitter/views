import { Outlet } from "react-router-dom"
import Header from "../../Common/Header/Header"
import * as S from './HomeLayout.css'

const HomeLayout = () => {
  return (
    <>
        <Header/>
        <S.OutletContainer id="main">
          <Outlet/>
        </S.OutletContainer>
    </>
  )
}

export default HomeLayout