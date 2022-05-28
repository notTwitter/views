import { FC, useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const Auth: FC = () => {

  //State   !!!Warning. I'm not sure Whether using state here is the best practice. 
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  //Checking backend
  fetch('http://localhost/test/checkAuth', {credentials: 'include'})
  .then(res=> {return res.json()})
  .then(data=> {setIsLoggedIn(data.isLoggedIn)})
    
  return(
    <>
    {
    isLoggedIn
      ? <Outlet/>
      : <Outlet/>    //<>Nah Uh</>   This should be replaced in production
    }
    </>
  )
};

export default Auth;
