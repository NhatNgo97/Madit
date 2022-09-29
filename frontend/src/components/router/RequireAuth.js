import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function RequireAuth({ children }) {
  const authState = useSelector((state) => state.auth.user);
  return authState === null ? <Navigate to="/login" /> : <>{children}</>;
}

export default RequireAuth;
