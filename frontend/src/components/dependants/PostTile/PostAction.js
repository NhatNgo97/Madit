import { GoComment } from "react-icons/go";
import Button from "../../common/Button";
import { BiShare } from "react-icons/bi";
import { BiDotsHorizontal } from "react-icons/bi";
function PostAction() {
  return (
    <div className="flex flex-row">
      <Button type="post">
        <GoComment />
        20 comments
      </Button>
      <Button type="post">
        <BiShare />
        Share
      </Button>
      <Button type="post">
        <BiDotsHorizontal />
      </Button>
    </div>
  );
}

export default PostAction;
