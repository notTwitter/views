import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Auth/Auth";
import HomeLayout from "./Layout/HomeLayout/HomeLayout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Auth />}>
              <Route path="" element={<HomeLayout />}>
                <Route index element={<Home />} />
                <Route path="notifications" element={null} />
                <Route path="messages" element={null} />
                <Route path="profile" element={null} />
                <Route path="more" element={null} />
              </Route>
            </Route>

            {/* Unprotected path */}
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
