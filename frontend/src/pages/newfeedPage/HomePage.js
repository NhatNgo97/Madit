import Button from "../../components/common/Button";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import PostTile from "../../components/dependants/PostTile";
import { useEffect } from "react";
import { getAllPostAsyncAction } from "../../redux/postSlice";
import ErrorNotifier from "../../components/common/ErrorNotifier";
import { ReactComponent as LoadingLogo } from "../../assets/images/loading-icon.svg";
import CreatePostTile from "../../components/view/HomePage/CreatePostTile";

function HomePage() {
  const dispatch = useDispatch();
  const postState = useSelector((state) => state.post);
  const accessToken = useSelector((state) => state.auth.accessToken);
  const postList = postState.allPost.results;
  const fetchingStatus = postState.getAllPost.status;
  useEffect(() => {
    dispatch(getAllPostAsyncAction());
  }, []);

  console.log("re-render");
  return (
    <div className="w-[600px] max-w-full">
      <div className="flex flex-col gap-2">
        <CreatePostTile />
        {fetchingStatus === "succeeded" ? (
          <>
            {postList.map((post) => {
              return <PostTile key={post._id} post={post} />;
            })}
          </>
        ) : fetchingStatus === "rejected" ? (
          <ErrorNotifier />
        ) : (
          <LoadingLogo />
        )}
      </div>
    </div>
  );
}

export default HomePage;
