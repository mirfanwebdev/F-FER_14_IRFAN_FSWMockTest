import { Navigate, Outlet } from "react-router-dom";
export default function AuthRoute({ children }) {
  const access = localStorage.getItem("isAuth");
  if (access) {
    return <Navigate to="/" />;
  }
  return <>{children || <Outlet />}</>;
}
