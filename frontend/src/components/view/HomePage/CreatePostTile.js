import { useSelector } from "react-redux";
import Avatar from "../../dependants/PostTile/Avatar";
import {
  AiFillAccountBook,
  AiFillFileImage,
  AiOutlineBell,
  AiOutlineFileImage,
  AiOutlineLink,
} from "react-icons/ai";
import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";

function CreatePostTile() {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  function handleOnClick() {
    navigate("/submit");
  }

  return (
    <div className="w-full flex flex-row text-sm rounded-md border-gray-200  cursor-pointer bg-white p-2 gap-1 items-center">
      <div className="max-w-[8%]">
        <Avatar imgSrc={user.avatar} />
      </div>
      <div className="f grow h-full">
        <input
          className="bg-[#e8e8e8] w-full h-10 hover:border-blue-500 border-[1px] rounded-md"
          placeholder="    Create Post"
          onClick={handleOnClick}
        ></input>
      </div>
      <div>
        <Button className="bg-transparent hover:bg-[#e8e8e8]">
          <AiOutlineFileImage className="w-6 h-6 text-[#1a1a1b]" />
        </Button>
      </div>
      <div>
        <Button className="bg-transparent hover:bg-[#e8e8e8]">
          <AiOutlineLink className="w-6 h-6 text-[#1a1a1b]" />
        </Button>
      </div>
    </div>
  );
}

export default CreatePostTile;
