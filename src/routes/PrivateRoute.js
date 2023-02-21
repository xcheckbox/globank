import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const user = {
    isAuthenticated: false
  }

  return user.isAuthenticated ? children : <Navigate to="/login" />
}