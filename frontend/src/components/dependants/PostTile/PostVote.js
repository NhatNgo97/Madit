import { BsArrowDownCircleFill } from "react-icons/bs";
import { BsArrowDownCircle } from "react-icons/bs";

function PostVote() {
  return (
    <div className="w-8 bg-[rgba(255,255,255,0.8)] flex flex-col rounded-l-md items-center pt-2">
      <button>
        <BsArrowDownCircle className="rotate-180 hover:text-blue-300" />
      </button>
      88
      <button>
        <BsArrowDownCircle className="hover:text-blue-300" />
      </button>
    </div>
  );
}

export default PostVote;
