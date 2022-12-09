import Logo from "../../../assets/images/logo.svg";
import NavBarButtons from "./NavBarButtons";
import NavigationDropDown from "./NavigationDropDown";
import SearchBar from "./SearchBar";
import UserDropDown from "./UserDropDown";

function NavBar() {
  return (
    <div className="h-[48px] bg-white flex flex-row items-center md:gap-4 gap-2">
      <div className="w-28 flex-shrink-0">
        <img src={Logo} alt="madit Logo" />
      </div>
      <NavigationDropDown />
      <SearchBar />
      <NavBarButtons />
      <UserDropDown />
    </div>
  );
}

export default NavBar;
