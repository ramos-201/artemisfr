import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import ConnStatus from "../pageTest/ConnStatus";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/conn_status" element={ <ConnStatus /> } /> 
        <Route path="/login" element={ <Login /> } />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
