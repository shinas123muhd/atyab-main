import React from "react";
import { browse } from "../../../constants";
import { useTranslation } from "react-i18next";

const Browse = () => {
  const { t } = useTranslation();
  return (
    <div className="px-4 xl:px-24 2xl:px-36 pt-16 pb-10 bg-primary flex flex-col items-center font-poppins text-secondary">
      <h3 className="text-3xl font-bold">{t("Browse The Range")}</h3>
      <p className="md:text-lg text-[#666666] mt-1">
        {t("Discover our wide selection of products.")}
      </p>
      <div className="w-full grid grid-cols-3 gap-4 my-[35px] md:my-[45px] overflow-hidden">
        {browse.map((item) => (
          <div
            className="flex-col group items-center cursor-pointer flex"
            key={item.id}
          >
            <div className="flexCenter w-full  shadow-md rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full group-hover:scale-110 transition-all duration-500 object-center object-cover"
              />
            </div>
            <h4 className="mt-5 text-center text-sm md:text-xl font-semibold">
              {t(`${item.title}`)}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;
