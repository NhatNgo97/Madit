import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function RequireNotAuth({ children }) {
  const authState = useSelector((state) => state.auth.user);
  return authState !== null ? <Navigate to="/" /> : <Outlet />;
}

export default RequireNotAuth;
