import HomePage from "../../pages/HomePage";
import LandingPage from "../../pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import RequireNotAuth from "./requireNotAuth";

function AppRouter() {
  return (
    <Routes>
      <Route element={<RequireNotAuth />}>
        <Route path="/login" element={<LandingPage />} />
      </Route>
      <Route element={<RequireAuth />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
