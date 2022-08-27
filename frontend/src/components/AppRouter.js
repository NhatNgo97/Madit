import HomePage from "../pages/HomePage";
import LandingPage from "../pages/LandingPage";
import { Routes, Route } from "react-router-dom";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default AppRouter;
