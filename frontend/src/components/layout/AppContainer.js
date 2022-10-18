import AppRouter from "../router/AppRouter";
import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";

function AppContainer({ children }) {
  const location = useLocation();

  return (
    <div className="bg-mainBg">
      {location.pathname !== "/login" && <NavBar />}
      <AppRouter />
    </div>
  );
}

export default AppContainer;
