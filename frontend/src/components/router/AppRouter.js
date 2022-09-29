import HomePage from "../../pages/HomePage";
import LandingPage from "../../pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import RequireNotAuth from "./requireNotAuth";

function AppRouter() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <RequireNotAuth>
            <LandingPage />
          </RequireNotAuth>
        }
      />
      <Route
        path="/"
        element={
          <RequireAuth>
            <HomePage />
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default AppRouter;
