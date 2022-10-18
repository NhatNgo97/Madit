import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

function SearchBar() {
  const [value, setValue] = useState("");

  return (
    <div className="relative">
      <AiOutlineSearch className="absolute top-2 left-2" />
      <input
        className="h-8 rounded-2xl bg-input px-6"
        placeholder="Search Madit"
      ></input>
    </div>
  );
}

export default SearchBar;
