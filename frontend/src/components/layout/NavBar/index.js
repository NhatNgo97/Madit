import Logo from "../../../assets/images/logo.svg";
import NavBarButtons from "./NavBarButtons";
import NavigationDropDown from "./NavigationDropDown";
import SearchBar from "./SearchBar";

function NavBar() {
  return (
    <div className="h-[48px] bg-white flex flex-row items-center">
      <div className="w-32">
        <img src={Logo} alt="madit Logo" />
      </div>
      <NavigationDropDown />
      <SearchBar />
      <NavBarButtons />
    </div>
  );
}

export default NavBar;
