import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import SideMenu from "../../Common/SideMenu/SideMenu";
import { MOBILE_BREAK_POINT } from "../../frontend.config";
import * as S from "./HomeLayout.css";

const HomeLayout = () => {

  //test
  const [count, setCount] = useState(0)
  console.log("Render!")

  /* Javascript media query to check whether the screen is mobile dimensions

  *       Using a **toggle** inside of the query function as the function is called **whenever** the screen size 
  *  moves through the mobile width border; i.e, both up and down.
  *  The listener will only be called on the first render. There is no need to re-assign an event listener each time
  *  because the event listener will not be consulting the current state. There is no need to worry about 'state freeze' (definition inside /retconned/sideMenu.md)
  * 
  *       Will have to set a definitive value for isMobile on the very first render,
  *  so will be creating the reducer to accept a toggle & a definitive set in state.
  */
  useEffect(() => {
    const toggleMobile = ():void=> {
      // toggle isMobile
    }
    const mobileCheck = window.matchMedia(`(max-width:${MOBILE_BREAK_POINT}px)`)
    mobileCheck.addEventListener('change', toggleMobile)
    
    //Manually checking the matchMedia only for the **first** render
    if(mobileCheck.matches===true){
     // isMobile = true
    }
    return ()=> {
      mobileCheck.removeEventListener('change', toggleMobile)
    }
  }, [])
 
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
