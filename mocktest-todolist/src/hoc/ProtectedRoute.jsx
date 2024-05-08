import { Navigate, Outlet } from "react-router-dom";
export default function ProtectedRoute({ children }) {
  const access = localStorage.getItem("isAuth");
  if (!access) {
    return <Navigate to={"/login"} />;
  }
  return <>{children || <Outlet />}</>;
}
