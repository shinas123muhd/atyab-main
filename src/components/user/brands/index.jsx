import React from "react";
import { brands } from "../../../constants";
import { useTranslation } from "react-i18next";

const Brands = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-primary font-poppins py-12 flex flex-col items-center px-4 xl:px-10 2xl:px-16">
      <div className="grid grid-cols-5">
        {brands.map((item) => (
          <div key={item.id} className="flexCenter">
            <img src={item.image} alt={item.title} className="w-[220px]" />
          </div>
        ))}
      </div>
      <div className="flex flex-col text-secondary my-[35px] md:my-[47px]">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-semibold text-sm md:text-base">
            {t("New Arrival")}
          </span>
          <h2 className="font-bold my-2 text-3xl md:text-[50px] text-center  md:text-left">
            {t("99+ Popular Perfume Brands")}
          </h2>
          <p className=" md:text-lg md:font-medium mt-3">
            {t(
              "Experience the enchantment of effortless shopping and indulge in the convenience it brings."
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brands;
