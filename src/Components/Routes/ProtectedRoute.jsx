import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import DrawerLayout from "../Layouts/DrawerLayout";


const ProtectedRoute = () => {
  return  (
    <DrawerLayout>
      <Outlet />
    </DrawerLayout>
  )
};

export default ProtectedRoute;