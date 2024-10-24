import React, { useEffect, useRef, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const DropDown = ({ options, setValue }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [currentOption, setCurrentOption] = useState(options[0]);
  const menuRef = useRef();

  useEffect(() => {
    const handleClose = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, [menuRef]);
  return (
    <>
      <div
        ref={menuRef}
        onClick={() => setMenuOpen(!isMenuOpen)}
        className="relative text-xs md:text-sm flexStart gap-1 cursor-pointer"
      >
        <div className="">{currentOption}</div>
        <KeyboardArrowDownIcon />
        {/* option menu  */}
        {isMenuOpen && (
          <div
            className="absolute top-7 bg-white border
        border-gray-100
        shadow-md rounded-sm min-w-16 "
          >
            <ul>
              {options.map((option, index) => (
                <li
                  onClick={() => {
                    setCurrentOption(option);
                    setValue && setValue(option);
                  }}
                  key={index}
                  className="px-3 py-2 hover:bg-blue-200 text-xs  hover:text-gray-600"
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default DropDown;
