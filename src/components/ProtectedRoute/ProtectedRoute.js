import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import SideBar from "../SideBar/SideBar";
import "./ProtectedRoute.scss";

const ProtectedRoute = () => {
  const location = useLocation();
  const user = useSelector((state) => state.userData.login);

  return user && user.success ? (
    <div className="protected-rotue-container">
      <SideBar />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default ProtectedRoute;
