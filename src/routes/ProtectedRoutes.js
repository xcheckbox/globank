import { Outlet } from "react-router-dom";
import { Unauthorized } from "../shared/Unauthorized";

export const ProtectedRoutes = () => {

  const isAuthenticated = true;

  if (!isAuthenticated) return <Unauthorized />

  return <Outlet />
}