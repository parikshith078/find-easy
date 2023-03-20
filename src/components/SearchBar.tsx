import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const iconSize = 24;

  return (
    <div className="search-div">
      <input
        className="search-box"
        type="text"
        placeholder="Enter City, Area or Pincode"
      />
      <div className="search-btn">
        <FaSearch size={iconSize} />
      </div>
    </div>
  );
};

export default SearchBar;
