import { useLocation, useNavigate } from "react-router-dom";
import Select from "react-select";
import { AiFillHome } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { AiFillFire } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";

function NavigationDropDown() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const valueNavigation = pathname.slice(1, pathname.length);

  function handleOnChange(e) {
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
      options={options}
      defaultValue={options[0].options}
      onChange={(e) => handleOnChange(e)}
      getOptionLabel={(e) => {
        return (
          <div className="flex items-center">
            {e.icon}
            <span className="">{e.label}</span>
          </div>
        );
      }}
    ></Select>
  );
}

export default NavigationDropDown;
