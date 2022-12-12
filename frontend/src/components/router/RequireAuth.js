import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";

function RequireAuth({ children }) {
  const authState = useSelector((state) => state.auth.user);
  return authState === null ? (
    <Navigate to="/login" />
  ) : (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default RequireAuth;
