import React from "react";
import { explore } from "../../../constants";
import { useTranslation } from "react-i18next";

const Explore = () => {
  const { t } = useTranslation();
  return (
    <div
      className=" px-4 xl:px-10 2xl:px-16 bg-primary flex flex-col items-center
     font-poppins text-secondary"
    >
      <h3 className="text-xl md:text-3xl font-semibold mb-2 mb:mb-0 md:font-bold">
        {t("Explore Our Premium  Oud specials")}
      </h3>
      <p className="text-base md:text-lg text-center md:text-left text-[#666666] mt-1">
        {t(
          "Embrace the Mystique of Oud: Timeless Luxury and Exotic Elegance Await"
        )}
      </p>
      <div className="w-full grid md:grid-cols-3 gap-10 md:gap-4 my-[30px] md:my-[45px] overflow-hidden">
        {explore.map((item) => (
          <div
            className="flex-col group items-center cursor-pointer flex"
            key={item.id}
          >
            <div className="flexCenter w-full  shadow-md rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full group-hover:scale-105 transition-all duration-1000 h-full object-center object-cover"
              />
            </div>
            <h4 className="mt-5 text-sm md:text-xl font-semibold">
              {t(`${item.title}`)}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
