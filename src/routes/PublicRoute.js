import { Navigate } from "react-router-dom"

export const PublicRoute = ({ children }) => {

  const user = {
    isAuthenticated: true
  }

  return user.isAuthenticated ? <Navigate to="/" /> : children
}