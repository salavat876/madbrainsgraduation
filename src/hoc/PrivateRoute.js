import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
  const location = useLocation();
  const { isAdmin } = useSelector(({ app }) => app);

  if (!isAdmin) {
    return <Navigate to="/" from={location.pathname} />;
  }
  return children;
}

export default PrivateRoute;
