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
    <div className="w-[600px] max-w-full">
      {/* newfeed Component */}
      <div className="flex flex-col gap-2">
        <PostTile />
        <PostTile />
        <PostTile />
        <PostTile />
        <PostTile />
        <PostTile />
      </div>
    </div>
  );
}

export default HomePage;
