import React, { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { Navigate } from "react-router-dom";

function RouteGuard({ component: Component }) {
  const { user } = useContext(UserContext);
  return user ? <Component /> : <Navigate to="/login" />;
}

export default RouteGuard;
