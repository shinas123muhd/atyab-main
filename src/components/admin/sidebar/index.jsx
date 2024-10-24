import SortIcon from "@mui/icons-material/Sort";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MENU_ITEMS } from "../../../constants";
import { Logo, LogoTitle } from "../../../constants/images";
import MenuItem from "./menuItem";

const SideBar = ({ isSideBarOpen, setSideBarOpen }) => {
  const { pathname: currentPath } = useLocation();
  const [openStates, setOpenStates] = useState(MENU_ITEMS.map(() => false));
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const sidebarRef = useRef();

  useEffect(() => {
    const handleClose = (event) => {
      if (sidebarRef?.current && !sidebarRef?.current?.contains(event.target)) {
        setSideBarOpen(true);
      }
    };

    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setIsMobileView(isMobile);
      if (isMobile) {
        document.addEventListener("mousedown", handleClose);
      } else {
        document.removeEventListener("mousedown", handleClose);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClose);
      window.removeEventListener("resize", handleResize);
    };
  }, [setSideBarOpen]);

  const toggleOpen = (index) => {
    setOpenStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  const renderSideBarContent = () => (
    <div className="h-full overflow-y-auto">
      <ul className="flex flex-col text-sm py-5 px-3 gap-3 font-medium">
        {MENU_ITEMS.map((item, index) => (
          <MenuItem
            key={index}
            item={item}
            currentPath={currentPath}
            isOpen={openStates[index]}
            toggleOpen={() => toggleOpen(index)}
            setSideBarOpen={setSideBarOpen}
            isMobileView={isMobileView}
          />
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div
        className={`${
          isSideBarOpen
            ? "min-w-0 w-0 scale-x-0 overflow-hidden"
            : "min-w-[230px] 2xl:min-w-[250px]"
        } bg-white border-r border-gray-100 shadow-md hidden text-gray-800 transition-all duration-300 lg:flex flex-col`}
      >
        <div className="min-h-[70px] flexCenter">
          <div className="flexBetween w-full px-3">
            <Link to={"/admin"}>
              <div className="flexStart">
                <img src={Logo} alt="logo" />
                <img src={LogoTitle} alt="logo title" />
              </div>
            </Link>
            <div
              onClick={() => setSideBarOpen(!isSideBarOpen)}
              className="flexCenter text-gray-500 cursor-pointer"
            >
              <SortIcon />
            </div>
          </div>
        </div>
        {renderSideBarContent()}
      </div>
      <div
        ref={sidebarRef}
        className={`${
          !isSideBarOpen ? "left-0" : "-left-[100%]"
        } fixed top-[70px] bg-white border-r border-t border-gray-100 md:hidden transition-all duration-300 bottom-0 w-[65%] z-50`}
      >
        {renderSideBarContent()}
      </div>
    </>
  );
};

export default SideBar;
