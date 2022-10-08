import Button from "../components/common/Button";
import { logoutAsyncUser } from "../redux/authSlice";
import { useDispatch } from "react-redux";

function HomePage() {
  const dispatch = useDispatch();
  function onLogoutClick() {
    dispatch(logoutAsyncUser());
  }
  return (
    <div>
      <h1>Home Page</h1>
      <Button onClick={onLogoutClick} type="priamry">
        Logout
      </Button>
    </div>
  );
}

export default HomePage;
