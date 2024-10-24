import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
const SearchBar = ({ isSearchBarOpen, setSearchBarOpen }) => {
  return (
    <div
      className={`${
        isSearchBarOpen ? "translate-x-0 " : `translate-x-[100%] `
      } transition-all  flexCenter 
    duration-300 absolute top-0 left-0 bottom-0 right-0 bg-white`}
    >
      <div className="w-[70%] md:w-[55%] flexStart gap-2 relative ">
        <input
          type="text"
          className="border p-2 text-xs md:text-base md:p-3 w-full"
          placeholder="Search here"
        />
        <div
          onClick={() => setSearchBarOpen(false)}
          className="cursor-pointer text-2xl md:text-4xl"
        >
          <ClearIcon fontSize="inherit" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
