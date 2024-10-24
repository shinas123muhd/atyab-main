import SortIcon from "@mui/icons-material/Sort";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { iconMenu, navbar, navbarBottomSection } from "../../../constants";
import { Logo, LogoTitle, Popular } from "../../../constants/images";
import CartDrawer from "../cart/drawer";
import MobileMenu from "../menu";
import SearchBar from "./serach-bar";
import ClearIcon from "@mui/icons-material/Clear";
import AuthForm from "./authForm";
import PersonIcon from "@mui/icons-material/Person";
import ProfileMenu from "./profileMenu";
const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isLanguageSwitchMenuOpen, setLanguageSwitchMenuOpen] = useState(false);
  const [isSearchBarOpen, setSearchBarOpen] = useState(false);
  const [isAuthFormOpen, setAuthFormOpen] = useState(false);
  const [isProfileMenuOpen, setProfileMenu] = useState(false);
  const languageRef = useRef();
  const profileMenuRef = useRef();
  const navigate = useNavigate();
  // For closing the langauge switch modal while click outside of that modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setLanguageSwitchMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [languageRef]);
  // closing the sidebar menu
  const handleMenuClose = () => {
    setMenuOpen(false);
  };
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguageSwitchMenuOpen(false);
  };
  // Set the document direction based on the selected language
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const location = useLocation();
  const currentPath = location.pathname;

  // stop scrolling if the menu open
  useEffect(() => {
    if (isCartOpen || isAuthFormOpen) {
      setMenuOpen(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCartOpen, isAuthFormOpen]);

  const handleIconMenu = (IconTitle) => {
    switch (IconTitle) {
      case "cart":
        {
          setCartOpen(!isCartOpen);
          setAuthFormOpen(false);
          setSearchBarOpen(false);
        }

        break;
      case "search":
        setSearchBarOpen(!isSearchBarOpen);
        setCartOpen(false);
        setAuthFormOpen(false);
        break;
      case "user":
        setProfileMenu(!isProfileMenuOpen);
        setCartOpen(false);
        setSearchBarOpen(false);
        break;
    }
  };

  return (
    <section
      className={` ${
        !isMenuOpen && ``
      } relative h-[90px] md:h-[150px] text-[#22223B] bg-white font-poppins 
    flex flex-col  w-full py-7 px-4 md:px-16`}
    >
      {/* top section  */}
      <div className=" grid grid-cols-6 md:grid-cols-12 items-center ">
        <div className="col-span-3 ">
          {/* logo  */}
          <Link to={"/"} className="flexStart">
            <img src={Logo} alt="atyab" />
            <img src={LogoTitle} alt="atyab" className="ml-1 w-20 md:w-fit" />
          </Link>
        </div>
        <div className="col-span-6 px-3 hidden md:flexEnd ">
          {/* menu  */}
          <div className=" w-full text-sm">
            <ul className="flexBetween     font-medium">
              {navbar.map((item) => (
                <Link key={item.id} to={item.path} className="relative">
                  <li
                    onClick={() =>
                      item.title === "Language" &&
                      setLanguageSwitchMenuOpen(!isLanguageSwitchMenuOpen)
                    }
                    key={item.id}
                    className={`cursor-pointer ${
                      currentPath === item.path && `text-yellow-600`
                    } hover:text-yellow-600  hover:-translate-y-1 translate-x-0 duration-300`}
                  >
                    {t(`${item.title}`)}
                  </li>
                  {/* language switch menu  */}
                  {item.title === "Language" && (
                    <div
                      ref={languageRef}
                      className={`absolute ${
                        isLanguageSwitchMenuOpen ? "block" : "hidden"
                      } top-6 rounded-lg min-w-[200px] h-fit p-4 bg-gray-100 shadow-md`}
                    >
                      <div className="grid grid-cols-2 gap-2">
                        <div
                          onClick={() => changeLanguage("en")}
                          className={`${
                            i18n.language === "en" && `bg-gray-800 text-white`
                          } flexCenter border px-2 py-1 rounded-lg cursor-pointer
                         hover:text-white hover:bg-gray-800 transition-all duration-300`}
                        >
                          {t("English")}
                        </div>
                        <div
                          onClick={() => changeLanguage("ar")}
                          className={` ${
                            i18n.language === "ar" && `bg-gray-800 text-white`
                          } flexCenter border px-2 py-1 rounded-lg cursor-pointer
                        hover:text-white hover:bg-gray-800 transition-all duration-300`}
                        >
                          {t("Arabic")}
                        </div>
                      </div>
                    </div>
                  )}
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className=" md:flexEnd col-span-3 ">
          {/* menu icons */}
          <div className=" flexEnd md:flexStart  ">
            <ul className="flexStart gap-4   md:gap-5 xl:gap-10 ">
              {iconMenu.map((item) => (
                <Link
                  onClick={() => handleIconMenu(item.title)}
                  key={item.id}
                  to={item.path}
                  className="relative"
                >
                  <li className=" cursor-pointer hover:-translate-y-1 translate-x-0 duration-300">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className=" w-5  md:w-6"
                    />
                  </li>
                  {/* count icon only for cart  */}
                  {item.title === "cart" && (
                    <div
                      className="absolute -top-4 -right-4 w-5 aspect-square  
                      rounded-full bg-black text-white text-xs md:text-sm flexCenter"
                    >
                      1
                    </div>
                  )}
                  {item.title === "user" && (
                    <ProfileMenu
                      isProfileMenuOpen={isProfileMenuOpen}
                      setAuthFormOpen={setAuthFormOpen}
                      setProfileMenu={setProfileMenu}
                    />
                  )}
                </Link>
              ))}
              <li
                onClick={() => setMenuOpen(!isMenuOpen)}
                className="md:hidden ml-4"
              >
                <SortIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* bottom section  */}
      <div className="hidden md:flexStart text-sm md:w-[85%] mt-5">
        <ul className="grid grid-cols-4 w-full gap-4">
          {navbarBottomSection.map((item) => (
            <Link key={item.id} to={`/shop?filteredBy=${item.title}`}>
              <li
                className="py-[10px] cursor-pointer text-xs md:text-sm flexCenter border-[1.6px]
                 hover:bg-[#22223B]
              hover:text-white transition-all duration-300
              border-[#22223B]/60 rounded-lg font-medium"
              >
                {t(`${item.title}`)}
              </li>
            </Link>
          ))}
        </ul>{" "}
      </div>
      {/* menu bar in mobile view  */}
      <MobileMenu isMenuOpen={isMenuOpen} handeClose={handleMenuClose} />
      {/* cart Drawer  */}
      <CartDrawer isCartOpen={isCartOpen} setCartOpen={setCartOpen} />
      {/* serach bar   */}
      <SearchBar
        isSearchBarOpen={isSearchBarOpen}
        setSearchBarOpen={setSearchBarOpen}
      />
      {/* auth form   */}
      <AuthForm
        isAuthFormOpen={isAuthFormOpen}
        setAuthFormOpen={setAuthFormOpen}
      />
    </section>
  );
};

export default Navbar;
