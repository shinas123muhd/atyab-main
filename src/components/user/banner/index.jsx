import React from "react";
import { MainBanner } from "../../../constants/images";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#F2E9E4] flex flex-col h-full  items-center py-16">
      <p className="text-lg text-[#666666] ">{t("Share your Snap with")}</p>
      <h3 className="text-3xl font-bold mt-2">{t("#ATYAB MAKKA")}</h3>
      <div className=" flex-col flex w-full h-full my-7">
        <img src={MainBanner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
