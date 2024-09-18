import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { isLogged } = useAuthContext();

  if (!isLogged) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
