import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import PostContent from "./PostContent";
import PostVote from "./PostVote";

function PostTile(props) {
  return (
    <div className="w-full flex flex-row text-sm rounded-md border-[1px] border-gray-200 hover:border-black cursor-pointer">
      <PostVote />
      <PostContent />
    </div>
  );
}

export default PostTile;
