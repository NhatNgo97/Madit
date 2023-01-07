import HomePage from "../../pages/newfeedPage/HomePage";
import LandingPage from "../../pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import RequireNotAuth from "./requireNotAuth";
import NewPage from "../../pages/newfeedPage/NewPage";
import PopularPage from "../../pages/newfeedPage/PopularPage";
import FriendPage from "../../pages/newfeedPage/FriendPage";
import MainContentLayout from "../layout/MainContentLayout";
import DetailPostPage from "../../pages/DetailPostPage";

function AppRouter() {
  return (
    <Routes>
      <Route element={<RequireNotAuth />}>
        <Route path="/login" element={<LandingPage />} />
      </Route>
      <Route element={<RequireAuth />}>
        <Route element={<MainContentLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<NewPage />} />
          <Route path="/popular" element={<PopularPage />} />
          <Route path="/friends" element={<FriendPage />} />
          <Route path="/post/:id" element={<DetailPostPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRouter;
