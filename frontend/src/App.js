import logo from "./logo.svg";
import "./App.css";
import AppContainer from "./components/layout/AppContainer";
import AppRouter from "./components/router/AppRouter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginWithTokenAsyncUser } from "./redux/authSlice";

function App() {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.auth.login.status);
  useEffect(() => {
    console.log("sad");
    dispatch(loginWithTokenAsyncUser());
  }, []);
  return loginState === "pending" ? (
    <div>Loading</div>
  ) : (
    <AppRouter></AppRouter>
  );
}

export default App;
