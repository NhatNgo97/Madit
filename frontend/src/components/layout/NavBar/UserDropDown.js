import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";

function UserDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { handleLogout } = useAuth();
  function handleOpen() {
    setIsOpen((prev) => !prev);
  }
  const userDropDownMenu = [
    {
      icon: null,
      title: "Profile",
      toggle: false,
      handleClick: function () {
        navigate("/me");
      },
    },
    {
      icon: null,
      title: "Dark Mode",
      toggle: true,
      toggleOn: false,
      handleClick: function () {},
    },
    {
      icon: null,
      title: "Logout",
      toggle: false,
      handleClick: function () {
        handleLogout();
        navigate("/");
      },
    },
  ];
  return (
    <div className="relative mr-2 cursor-pointer">
      <div
        onClick={handleOpen}
        className="flex flex-row items-center justify-between border-transparent hover:border-[#EDEFF1] bg-transparent border-[1px] hover:shadow-sm"
      >
        <div className="flex flex-row items-center md:w-32 w-10">
          <div className="w-10">
            <img src="https://preview.redd.it/rrz3hmsxcll71.png?auto=webp&s=59f9f6ae2b212be39fc4f3e17fcabc873c287858" />
          </div>
          <div className="hidden md:block text-sm">
            <p>username</p>
            <p>1 karma</p>
          </div>
        </div>
        <div>
          <MdOutlineKeyboardArrowDown />
        </div>
      </div>
      {isOpen && (
        <div className="absolute flex flex-col w-60 right-0 top-12 bg-white border-[1px] rounded-md">
          {userDropDownMenu.map((item, index) => {
            return (
              <div
                key={index}
                onClick={item.handleClick}
                className="hover:bg-[rgba(0,0,0,0.04)] cursor-pointer flex flex-row p-3 "
              >
                <div className="w-8">{item.icon}</div>
                <h3 className="text-md font-semibold">{item.title}</h3>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default UserDropDown;
