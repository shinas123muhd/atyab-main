import React, { useEffect, useState } from "react";
import { AboutUs, FooterBg } from "../../constants/images";
import CountUp from "react-countup";
import CoutnUpAnimation from "../../components/user/common/countUpAnimaiton";
import { aboutUsStatics } from "../../constants";
import { useTranslation } from "react-i18next";
import { Header } from "../../components";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header title={t("About Us")} />
      <section className="min-h-screen bg-[#F2E9E4]  font-poppins">
        <div className="px-4 md:px-16 grid lg:grid-cols-2 gap-4  py-7 md:py-20 h-full">
          <div className="h-full relative rounded-xl bg-white shadow-md  overflow-hidden w-full p-5 flex flex-col">
            <h4 className=" font-normal text-sm md:text-base text-yellow-600">
              {t("How it Started")}
            </h4>
            <h2 className="text-xl md:text-3xl font-semibold md:leading-[46px] my-3">
              {t("Our Dream is")} <br className="hidden md:block" />{" "}
              {t("Global Learning Transformation")}
            </h2>
            <p className="text-gray-600  md:mt-8  leading-8 text-sm md:text-[16px]">
              {t(`about.description`)}
            </p>
            <p className="text-gray-600 leading-8 mt-3 text-sm md:text-[16px]">
              {t(`about.description`)}
            </p>
            <div className="absolute   w-full h-full left-0 right-0 bottom-0 top-0 m-auto ">
              <img
                src={FooterBg}
                alt=""
                className="w-full h-full object-cover opacity-10   "
              />
            </div>
          </div>
          <div className="w-full gap-3 shadow-md grid h-full rounded-xl">
            <div className=" overflow-hidden">
              <img
                src={AboutUs}
                alt="about us"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="grid grid-cols-2 gap-2 md:gap-4 bg-white rounded-xl p-4">
              {aboutUsStatics.map((item) => (
                <div
                  key={item.id}
                  className="min-h-[120px] bg-blue-50 rounded-xl flex justify-center px-4 flex-col"
                >
                  <span className="text-3xl font-medium">
                    <CoutnUpAnimation value={item.value} />
                  </span>
                  <p className="capitalize text-gray-600 mt-1 text-xs md:text-sm">
                    {t(`${item.title}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
