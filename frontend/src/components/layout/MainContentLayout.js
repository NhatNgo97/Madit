import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function MainContentLayout() {
  return (
    <main className="flex flex-row justify-center p-5 gap-5">
      <Outlet />
      <Footer />
    </main>
  );
}

export default MainContentLayout;
