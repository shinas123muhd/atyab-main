import React from "react";
import { navbar } from "../../../constants";
import { FooterBg } from "../../../constants/images";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <footer className="relative overflow-hidden bg-white/90 px-4  md:px-20 grid font-poppins grid-cols-4 md:grid-cols-12 gap-16 pt-16 text-sm text-[#22223B] ">
      <div className="col-span-4 flex flex-col">
        <h4 className="font-bold text-xl">{t("Atyab Makka Perfumes")}</h4>
        <ul className="flex flex-col gap-2 text-[#9F9F9F] font-extralight tex-sm md:text-base mt-3 md:mt-12">
          <li>{t("400 University Drive Suite 200 Coral Gables,")}</li>
          <li>{t("FL 33134 Qatar")}</li>
        </ul>
      </div>
      <div className=" col-span-4 md:col-span-2 flex flex-col">
        <h5 className=" md:text-base text-[#9F9F9F] font-medium">
          {t("Links")}
        </h5>
        <ul className="flex flex-col mt-5 md:mt-12 gap-8">
          {navbar.map((item) => (
            <Link to={item.path} key={item.id}>
              <li
                className={`${
                  currentPath === item.path && `text-yellow-600`
                } hover:text-yellow-600 font-medium cursor-pointer`}
              >
                {t(`${item.title}`)}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="col-span-4 md:col-span-2 ">
        <h5 className=" text-base text-[#9F9F9F] font-medium">{t("Help")}</h5>
        <ul className="flex flex-col mt-5 md:mt-12 gap-8">
          <li className="font-medium cursor-pointer">{t("Payment Options")}</li>
          <li className="font-medium cursor-pointer">{t("Returns")}</li>
          <li className="font-medium cursor-pointer">
            {t("Privacy Policies")}
          </li>
        </ul>
      </div>
      <div className="col-span-4 ">
        <h5 className=" text-base text-[#9F9F9F] font-medium">
          {t("Newsletter")}
        </h5>
        <div className="flexStart mt-10 2xl:w-[80%]">
          <input
            type="text"
            className=" outline-none bg-transparent py-2  w-full xl:w-[60%]  border-b-2 border-[#22223B]/50"
            placeholder={t("Enter your email address")}
          />
          <button className="text-sm ml-3 font-medium border-b-2 py-2 border-[#22223B]/50">
            {t("SUBSCRIBE")}
          </button>
        </div>
      </div>
      <div className="col-span-4 md:col-span-12 h-[100px] border-t  flexStart">
        <p>{t("2024 Atyab. All rights reserved")}</p>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-10  ">
        <img
          src={FooterBg}
          alt=""
          className="w-full h-full lg:h-auto object-cover transform xl:-translate-y-56  "
        />
      </div>
    </footer>
  );
};

export default Footer;
