import logo from "./logo.svg";
import "./App.css";
import AppContainer from "./components/layout/AppContainer";
import AppRouter from "./components/router/AppRouter";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useAuth from "./hooks/useAuth";

function App() {
  const { persist, handleLoginWithToken } = useAuth();

  const loginState = useSelector((state) => state.auth.login.status);
  useEffect(() => {
    persist && handleLoginWithToken();
  }, []);
  return loginState === "pending" ? (
    <div>Loading</div>
  ) : (
    <AppContainer></AppContainer>
  );
}

export default App;
