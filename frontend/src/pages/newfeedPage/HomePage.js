import Button from "../../components/common/Button";
import { logoutAsyncUser } from "../../redux/authSlice";
import { useDispatch } from "react-redux";

function HomePage() {
  const dispatch = useDispatch();
  function onLogoutClick() {
    dispatch(logoutAsyncUser());
  }
  return (
    <div className="">
      <div>asdasd</div>
      <div>asdad</div>
    </div>
  );
}

export default HomePage;
