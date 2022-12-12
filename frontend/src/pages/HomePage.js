import Button from "../components/common/Button";
import { logoutAsyncUser } from "../redux/authSlice";
import { useDispatch } from "react-redux";

function HomePage() {
  const dispatch = useDispatch();
  function onLogoutClick() {
    dispatch(logoutAsyncUser());
  }
  return (
    <main>
      <div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
}

export default HomePage;
