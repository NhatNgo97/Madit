import { useState } from "react";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { BsArrowDownCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { upvoteAPostAsyncAction } from "../../../redux/postSlice";
import api from "../../../services/api";
import postService from "../../../services/post";

function PostVote({ postId, upvotes, downvotes }) {
  const userId = useSelector((state) => state.auth.user._id);
  const upvoteState = useSelector((state) => state.post.upvoteAPost.status);
  const dispatch = useDispatch();
  const [voteState, setVoteState] = useState({
    count: upvotes.length - downvotes.length,
    upVoted: upvotes.includes(userId),
    downVoted: downvotes.includes(userId),
  });

  function handleUpVote() {
    // dispatch(upvoteAPostAsyncAction({ postId }));
    async function upvoteApi() {
      const res = await postService.upvoteAPost({ postId, userId });
      console.log(postId);
      console.log(res);
      if (res.data.success === true) {
        setVoteState({
          count:
            res.data.type === "vote" && voteState.downVoted === true
              ? voteState.count + 2
              : res.data.type === "vote" && voteState.downVoted === false
              ? voteState.count + 1
              : voteState.count - 1,
          upVoted: !voteState.upVoted,
          downVoted: false,
        });
      }
    }

    upvoteApi();
  }
  function handleDownVote() {
    async function downvoteApi() {
      const res = await postService.downvoteAPost({ postId, userId });
      console.log(postId);
      console.log(res);
      if (res.data.success === true) {
        setVoteState({
          count:
            res.data.type === "vote" && voteState.upVoted === true
              ? voteState.count - 2
              : res.data.type === "vote" && voteState.upVoted === false
              ? voteState.count - 1
              : voteState.count + 1,
          upVoted: false,
          downVoted: !voteState.downVoted,
        });
      }
    }

    downvoteApi();
  }
  return (
    <div className="w-8 bg-[rgba(255,255,255,0.8)] flex flex-col rounded-l-md items-center pt-2">
      <button onClick={handleUpVote}>
        {voteState.upVoted ? (
          <BsArrowDownCircleFill className="rotate-180 hover:text-blue-300 text-xl" />
        ) : (
          <BsArrowDownCircle className="rotate-180 hover:text-blue-300 text-xl" />
        )}
      </button>
      {voteState.count}
      <button onClick={handleDownVote}>
        {voteState.downVoted ? (
          <BsArrowDownCircleFill className="hover:text-blue-300 text-xl" />
        ) : (
          <BsArrowDownCircle className="hover:text-blue-300 text-xl" />
        )}
      </button>
    </div>
  );
}

export default PostVote;
