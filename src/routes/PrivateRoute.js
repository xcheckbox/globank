import { AuthContext } from "auth/authContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext)

  return user.isAuthenticated ? children : <Navigate to="/login" />
}