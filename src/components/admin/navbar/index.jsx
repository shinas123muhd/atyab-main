import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useRef, useState } from "react";
import { Chat, Notifcation, Settings } from "../../../constants/icons";
import SortIcon from "@mui/icons-material/Sort";
import LogoutIcon from "@mui/icons-material/Logout";
import { Profile } from "../../../constants/images";
const AdminNavbar = ({ isSideBarOpen, setSideBarOpen }) => {
  const [isLgoutOpen, setLogoutOpen] = useState(false);
  const logoutRef = useRef();
  useEffect(() => {
    const handleClose = (event) => {
      if (logoutRef?.current && !logoutRef?.current?.contains(event.target)) {
        setLogoutOpen(false); // Close the sidebar
      }
    };

    document.addEventListener("mousedown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, [logoutRef]);
  return (
    <nav className="h-[70px] bg-white flexCenter px-3 md:px-5 py-[15px] relative">
      <div className="w-full h-full grid grid-cols-2">
        <div className="flexCenter relative rounded-lg overflow-hidden">
          {isSideBarOpen && (
            <div
              className="hidden  md:block text-gray-500  mr-3 cursor-pointer"
              onClick={() => setSideBarOpen(!isSideBarOpen)}
            >
              <SortIcon />
            </div>
          )}
          <div
            className="  md:hidden text-gray-500  mr-3 cursor-pointer"
            onClick={() => setSideBarOpen(!isSideBarOpen)}
          >
            <SortIcon />
          </div>
          <input
            type="text"
            className="w-full h-full p-3 px-4 pr-16 text-sm border rounded-lg outline-none"
            placeholder="Search here"
          />
          <div className="absolute right-0 px-3 top-0 bottom-0 my-auto   text-gray-500 flexCenter">
            <SearchIcon />
          </div>
        </div>
        <div className="flexEnd gap-2 py-1 md:gap-4">
          <div
            className="h-full cursor-pointer aspect-square bg-gray-200
           text-gray-600 flexCenter rounded-full relative"
          >
            <img src={Notifcation} alt="notification" className=" w-4 md:w-5" />
            <div
              className="bg-red-500 text-xs flexCenter z-50 text-white w-fit px-1 aspect-square
             rounded-full absolute -top-2 -right-2"
            >
              10
            </div>
            <div
              className="bg-red-500 text-xs flexCenter  animate-ping w-5 px-1 aspect-square
             rounded-full absolute -top-2 -right-2"
            ></div>
          </div>

          <div
            onClick={() => setLogoutOpen(!isLgoutOpen)}
            className="flexStart h-full cursor-pointer relative"
          >
            <div className="h-full w-9 aspect-square flexCenter rounded-full overflow-hidden bg-red-400 ">
              <img
                src={Profile}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:flex flex-col ml-2">
              <h4 className="text-sm font-medium ">Admin</h4>
              <h4 className="text-xs font-medium text-gray-600">Editor</h4>
            </div>
            <div
              ref={logoutRef}
              className={`absolute w-[140px] ${
                isLgoutOpen
                  ? " -translate-x-16 md:translate-x-0"
                  : `translate-x-[100%] -z-40`
              } h-fit p-3  text-gray-800 hover:py-5 transition-all
             duration-300  bg-white shadow-xl border-t rounded-b-lg top-[50px]  flexBetween`}
            >
              <button className="text-sm font-medium">Logout</button>
              <div className="group">
                <LogoutIcon
                  fontSize="small"
                  className="group-hover:text-red-400"
                />
              </div>
            </div>
          </div>
          <div className="border-l pl-2 md:pl-6">
            <div className="h-full cursor-pointer  aspect-square bg-gray-200 text-gray-600 flexCenter rounded-full">
              <img src={Settings} alt="notification" className=" w-4 md:w-5" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
