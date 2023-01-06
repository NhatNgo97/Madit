import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import PostAction from "./PostAction";

function PostContent({ title, description, commentCount, user }) {
  return (
    <div className="flex flex-col bg-white w-full p-2 gap-2 rounded-r-md">
      <div className="flex flex-row gap-2">
        <Link to="#" className="flex flex-row items-center">
          <div className="w-6">
            <Avatar imgSrc={user.avatar} />
          </div>

          <h3 className="font-bold">{`r/${user.nickname}`}</h3>
        </Link>
        <p>5 Hour ago</p>
      </div>
      <h3 className="font-semibold text-xl">{title}</h3>
      <div className="line-clamp-5">{description}</div>
      <PostAction commentCount={commentCount} />
    </div>
  );
}

export default PostContent;
