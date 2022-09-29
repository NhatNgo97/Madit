import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function RequireNotAuth({ children }) {
  const authState = useSelector((state) => state.auth.user);
  return authState !== null ? <Navigate to="/" /> : <>{children}</>;
}

export default RequireNotAuth;
