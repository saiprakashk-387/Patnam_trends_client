import React from "react";
import { Routes, Route } from "react-router-dom";
import AddStockForm from "../../Admin/AddStock";
import AdminDashboard from "../../Admin/AdminDashboard";
import StockEdit from "../../Admin/StockEdit";
import StockList from "../../Admin/StockList";
import UserEdit from "../../Admin/UserEdit";
import UserList from "../../Admin/UsersList";
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
          <Route path ="/admindashboard" element={<AdminDashboard/>}/>
          <Route path ="/adminuserlist" element={<UserList/>}/>
          <Route path ="/adminuseredit" element={<UserEdit/>}/>
          <Route path ="/addstock" element={<AddStockForm/>}/>
          <Route path ="/viewstock" element={<StockList/>}/>
          <Route path ="/stockedit" element={<StockEdit/>}/>
        </Route>       
      </Routes>
      
    </div>
  );
}

export default MainRoute;
