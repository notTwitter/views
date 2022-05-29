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
  */
  useEffect(() => {
    const toggleMobile = ():void=> {
      console.log("Yo")
    }
    const mobileCheck = window.matchMedia(`(max-width:${MOBILE_BREAK_POINT}px)`)
    mobileCheck.addEventListener('change', toggleMobile)
    
    //Manually checking the matchMedia only for the **first** render
    if(mobileCheck.matches===true){
      console.log("Yo from first render")
    }
    return ()=> {
      mobileCheck.removeEventListener('change', toggleMobile)
      console.log("Removed")
    }
  }, [])
 
  return (
    <>
    <button style={{height: '50px', width: '50px'}} onClick={()=>{setCount(count+1)}}>asdfadf</button>
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
