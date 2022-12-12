import Button from "../../components/common/Button";
import { logoutAsyncUser } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import PostTile from "../../components/dependants/PostTile";

function HomePage() {
  const dispatch = useDispatch();
  function onLogoutClick() {
    dispatch(logoutAsyncUser());
  }
  return (
    <div className="">
      <PostTile />
    </div>
  );
}

export default HomePage;
