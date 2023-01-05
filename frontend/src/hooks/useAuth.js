import { useDispatch, useSelector } from "react-redux";
import {
  loginAsyncUser,
  loginWithTokenAsyncUser,
  logoutAsyncUser,
  registerAsyncUser,
} from "../redux/authSlice";
import api from "../services/api";
import { useEffect } from "react";

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
    await dispatch(loginWithTokenAsyncUser(user));
  };

  const handleLogout = async () => {
    dispatch(logoutAsyncUser());
  };

  //
  useEffect(() => {
    if (accessToken) {
      const requestIntercept = api.interceptors.request.use(function (config) {
        config.headers.authorization = `Bearer ${accessToken}`;
        return config;
      });
      return () => {
        api.interceptors.request.eject(requestIntercept);
      };
    }
  }, [accessToken]);

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
