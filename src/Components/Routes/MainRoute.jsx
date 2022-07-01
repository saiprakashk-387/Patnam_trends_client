import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import MyProfile from "../Profile/MyProfile";
import ProtectedRoute from "./ProtectedRoute";

function MainRoute() {
  return (
    <div>     
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/myprofile" element={<MyProfile />} />
        </Route>
      </Routes>
      
    </div>
  );
}

export default MainRoute;
