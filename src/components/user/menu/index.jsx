import { useEffect, useState } from "react";
import { navbar } from "../../../constants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTranslation } from "react-i18next";
const MobileMenu = ({ isMenuOpen, handeClose }) => {
  const [isLanguageOpen, setLangaugeOpen] = useState(false);
  const { t, i18n } = useTranslation();
  // stop scrolling if the menu open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);
  // Prevents the click event from closing the menu
  const handleInnerClick = (event) => {
    event.stopPropagation();
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);

    handeClose();
  };
  return (
    <div
      onClick={() => handeClose()}
      className={`md:hidden   w-full bg-transparent  ${
        isMenuOpen ? `right-0` : `-right-[100%]`
      } transition-all duration-300 flexEnd absolute z-50 top-[90px]
   h-[91vh] p`}
    >
      <div
        onClick={handleInnerClick} // This stops the click event from propagating
        className={`
  bg-white text-[#22223B]  rounded-bl-lg  text-base 
  sm:text-lg w-[90%] 
  flex flex-col justify-between h-full p-5 px-7`}
      >
        <ul className="flex flex-col mt-6 gap-3">
          {navbar.map((item, index) => (
            <Link
              key={item.id}
              to={item.path}
              className={`${
                index < navbar.length - 1 && `border-b`
              } border-black/15 py-2 text-sm md:text-base md:py-4 pb-5`}
            >
              <motion.li
                className="relative"
                onClick={() => {
                  item.title !== "Language"
                    ? handeClose()
                    : setLangaugeOpen(!isLanguageOpen);
                }}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: isMenuOpen ? 1 : 0,
                  x: isMenuOpen ? 0 : 100,
                }}
                transition={{
                  delay: isMenuOpen ? item.id * 0.2 : 0,
                  duration: 0.3,
                }}
              >
                {t(`${item.title}`)}
                {item.title === "Language" && (
                  <KeyboardArrowDownIcon
                    fontSize="small"
                    className="-rotate-90 ml-2"
                  />
                )}
                {item.title === "Language" && (
                  <ul
                    className={`${
                      isLanguageOpen ? `flex` : `hidden`
                    } absolute top-7  w-full p-3  flex-col gap-3`}
                  >
                    <li onClick={() => changeLanguage("en")}>{t("English")}</li>
                    <li onClick={() => changeLanguage("ar")}>{t("Arabic")}</li>
                  </ul>
                )}
              </motion.li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
