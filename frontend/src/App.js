import logo from "./logo.svg";
import "./App.css";
import AppContainer from "./components/layout/AppContainer";
import AppRouter from "./components/router/AppRouter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginWithTokenAsyncUser } from "./redux/authSlice";
import useAuth from "./hooks/useAuth";

function App() {
  const dispatch = useDispatch();
  const { persist } = useAuth();

  const loginState = useSelector((state) => state.auth.login.status);
  useEffect(() => {
    persist && dispatch(loginWithTokenAsyncUser());
  }, []);
  return loginState === "pending" ? (
    <div>Loading</div>
  ) : (
    <AppContainer></AppContainer>
  );
}

export default App;
