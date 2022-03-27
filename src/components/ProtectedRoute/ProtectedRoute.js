import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const location = useLocation();
  const user = true;

  return !user ? (
    <Navigate to="/" replace state={{ from: location }} />
  ) : (
    <Outlet />
  );
};

export default ProtectedRoute;
