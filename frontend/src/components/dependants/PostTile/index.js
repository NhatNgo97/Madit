import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import PostContent from "./PostContent";
import PostVote from "./PostVote";

function PostTile({ post }) {
  const voteCount = post.upvotes.length - post.downvotes.length;
  const title = post.title;
  const description = post.description;
  const user = post.user;
  const commentCount = post.comments.length;
  return (
    <div className="w-full flex flex-row text-sm rounded-md border-[1px] border-gray-200 hover:border-black cursor-pointer">
      <PostVote
        postId={post._id}
        upvotes={post.upvotes}
        downvotes={post.downvotes}
        userId={user._id}
      />
      <PostContent
        title={title}
        description={description}
        commentCount={commentCount}
        user={user}
      />
    </div>
  );
}

export default PostTile;
