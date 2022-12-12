import Button from "../../common/Button";
import { AiOutlineBell } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

function NavBarButtons() {
  return (
    <div className="flex flex-row">
      <Button className="bg-transparent hover:bg-[#e8e8e8]">
        <AiOutlineBell className="w-6 h-6 text-[#1a1a1b]" />
      </Button>
      <Button className="bg-transparent hover:bg-[#e8e8e8]">
        <BsThreeDots className="w-6 h-6 text-[#1a1a1b]" />
      </Button>
      <Button className="bg-transparent hover:bg-[#e8e8e8]">
        <AiOutlinePlus className="w-6 h-6 text-[#1a1a1b]" />
      </Button>
    </div>
  );
}

export default NavBarButtons;
