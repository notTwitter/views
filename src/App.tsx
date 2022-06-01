import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Auth/Auth";
import HomeLayout from "./Layout/HomeLayout/HomeLayout";
import Home from "./Pages/Home/Home";
import Credentials from "./Pages/Credentials/Credentials";

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Auth />}>
              <Route path="" element={<HomeLayout />}>        {/*The home-layout element defines the layout of the sidemenu and content*/}
                <Route index element={<Home />} />
                <Route path="notifications" element={null} />
                <Route path="messages" element={null} />
                <Route path="profile" element={null} />
                <Route path="more" element={null} />
              </Route>
            </Route>

            {/* Unprotected path */}
            <Route path="login" element={<Credentials isLogin={true}/>}/>         {/* The same parent element will be used for both /login and /register ! */}
            <Route path="register" element={<Credentials isLogin={false}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
