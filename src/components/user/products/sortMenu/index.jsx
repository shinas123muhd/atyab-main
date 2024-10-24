import React, { useEffect, useRef, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTranslation } from "react-i18next";

// options  ----------->  All the options show the in select menu
// value    ----------->  current sort option
// setValue ----------->  set options

const SortMenu = ({ value, setValue, options }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();
  const sortMenuRef = useRef();

  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (sortMenuRef.current && !sortMenuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutSide);
  }, [sortMenuRef]);
  return (
    <div
      ref={sortMenuRef}
      onClick={() => setMenuOpen(!isMenuOpen)}
      className=" w-fit flexStart gap-2 cursor-pointer relative"
    >
      <span className="text-[#22223B] font-semibold text-lg md:text-2xl">
        {t(`${value}`)}
      </span>
      <KeyboardArrowDownIcon
        className={`${
          isMenuOpen ? `-rotate-90` : `rotate-0`
        } transition-all duration-300`}
      />
      {isMenuOpen && (
        <div className="w-[220px] bg-white rounded-md shadow-sm py-3 absolute top-8 z-30">
          <ul className="flex flex-col">
            {options.map((item) => (
              <li
                key={item.id}
                onClick={() => setValue(item.title)}
                className="px-3 hover:bg-primary py-3"
              >
                {t(`${item.title}`)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortMenu;
