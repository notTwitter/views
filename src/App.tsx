/* eslint-disable react/function-component-definition */
import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './Auth/Auth';
import HomeLayout from './Layout/HomeLayout/HomeLayout';
import Layout from './Layout/Layout';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Auth />}>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Route>

        {/* Unprotected path */}
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
