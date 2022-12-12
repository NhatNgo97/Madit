import { useDispatch, useSelector } from "react-redux";
import {
  loginAsyncUser,
  loginWithTokenAsyncUser,
  logoutAsyncUser,
  registerAsyncUser,
} from "../redux/authSlice";

function useAuth() {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);
  const persist = useSelector((state) => state.auth.persist);
  const handleLogin = async (user) => {
    dispatch(loginAsyncUser(user));
  };

  const handleRegister = async (user) => {
    dispatch(registerAsyncUser(user));
  };

  const handleLoginWithToken = async (user) => {
    dispatch(loginWithTokenAsyncUser(user));
  };

  const handleLogout = async () => {
    dispatch(logoutAsyncUser());
  };

  return {
    accessToken,
    persist,
    handleLogin,
    handleLogout,
    handleLoginWithToken,
    handleRegister,
  };
}

export default useAuth;
