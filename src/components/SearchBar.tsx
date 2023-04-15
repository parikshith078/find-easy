import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const iconSize = 24;

  return (
    <div className=" flex justify-between items-center w-full bg-base-100  h-16 border-solid border-[1px] px-1 py-1 border-[#7E7878] rounded-lg ">
      <input
        className="h-full pl-2  w-[90%] "
        type="text"
        placeholder="Enter City, Area or Pincode"
      />
      <div className="  w-12 aspect-square flex justify-center items-center bg-primary rounded-sm hover:bg-secondary transition-all delay-100 ">
        <FaSearch size={iconSize} />
      </div>
    </div>
  );
};

export default SearchBar;
