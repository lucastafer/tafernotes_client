import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function PrivateOutlet({ children }) {
  const auth = Boolean(localStorage.getItem("user"));
  return auth ? children : <Navigate to="/login" />;
}

export default PrivateOutlet;
