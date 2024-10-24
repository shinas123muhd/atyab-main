import React, { useEffect, useRef } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProfileMenu = ({
  isProfileMenuOpen,
  setProfileMenu,
  setAuthFormOpen,
}) => {
  const profileMenuRef = useRef();
  const { t } = useTranslation();
  useEffect(() => {
    const handleCloseProfilMenu = (event) => {
      console.log("object");
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleCloseProfilMenu);
    return () => {
      document.removeEventListener("mousedown", handleCloseProfilMenu);
    };
  }, [profileMenuRef]);
  return (
    <div
      ref={profileMenuRef}
      className={`${
        isProfileMenuOpen ? `block` : `hidden`
      }  min-w-[220px] rounded-md py-3 bg-white border shadow-md absolute z-[1000] top-7`}
    >
      <div className="flexStart px-3">
        <PersonIcon />
        <span className="ml-2 text-sm font-medium text-gray-600">
          abc@gmail.com
        </span>
      </div>
      <hr className="my-3" />
      <ul
        onClick={() => setProfileMenu(false)}
        className="flex flex-col text-sm"
      >
        <Link to={"/profile"}>
          <li className="py-3 hover:bg-primary px-3">{t("Profile")}</li>
        </Link>

        <li
          onClick={() => setAuthFormOpen(true)}
          className="py-3 hover:bg-primary px-3"
        >
          {t("Register")}
        </li>
      </ul>
    </div>
  );
};

export default ProfileMenu;
