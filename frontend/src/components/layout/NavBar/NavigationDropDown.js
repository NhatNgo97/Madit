import { useLocation, useNavigate } from "react-router-dom";
import Select from "react-select";
import { AiFillHome } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { AiFillFire } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { useState } from "react";

function NavigationDropDown() {
  const location = useLocation();
  const navigate = useNavigate();
  const [valueNavigation, setValueNavigation] = useState(
    location.pathname.slice(1, location.pathname.length)
  );

  function handleOnChange(e) {
    setValueNavigation(e.value);
    navigate(`/${e.value}`);
  }
  const options = [
    {
      label: "feeds",
      options: [
        { value: "", label: `Home`, icon: <AiFillHome /> },
        { value: "popular", label: "Popular", icon: <AiFillFire /> },
        { value: "new", label: "New", icon: <BsSun /> },
        { value: "friends", label: "Friends", icon: <FaUserFriends /> },
      ],
    },
  ];

  return (
    <Select
      className="min-w-[100px] w-[15%]"
      classNamePrefix="bg-white"
      options={options}
      defaultValue={options[0].options.find((i) => i.value === valueNavigation)}
      onChange={(e) => handleOnChange(e)}
      getOptionLabel={(e) => {
        return (
          <div className="flex items-center ">
            {e.icon}
            <span className="">{e.label}</span>
          </div>
        );
      }}
    ></Select>
  );
}

export default NavigationDropDown;
