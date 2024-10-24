import { motion } from "framer-motion";
import React from "react";
import Slider from "react-slick";
import Slider2 from "../../../assets/images/slider2.png";
import { motionUp, settings } from "../../../constants";
import { Slider1 } from "../../../constants/images";

const Lanpage = () => {
  const banners = [
    {
      id: 1,
      image: Slider1,
      title: "Discover Luxurious Perfumes & Scents",
    },
    {
      id: 2,
      image: Slider2,
      title: null,
    },
  ];
  return (
    <div className="h-full flex flex-col">
      <div className="h-[90vh] overflow-hidden">
        <Slider {...settings}>
          {banners.map((banner) => (
            <div key={banner.id} className=" relative h-[91vh] w-full">
              <img
                src={banner.image}
                alt="eco friendly"
                className="w-full h-full object-cover"
              />
              {banner.title && (
                <motion.div
                  variants={motionUp}
                  initial="initial"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.25 }}
                  viewport={{ once: false }}
                  className={`absolute flex-col  md:flex-row flexStart w-full md:w-fit 
                   gap-5 md:gap-2  md:right-[58px]  bottom-[140px]  backdrop-blur-sm
                    bg-black/20 rounded-lg  
                   py-5 px-3
               text-white font-bold `}
                >
                  <h3
                    className="text-center   w-full md:text-left font-semibold text-[32px] sm:text-[40px]
                 md:text-[42px] font-poppins leading-[55px]   [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-gray-500"
                  >
                    {banner.title.split(" ")[0]} <br />
                    {banner.title.split(" ").slice(1).join(" ")}
                  </h3>
                  <button className="bg-[#22223B] ml-3 py-4 px-7 w-[200px] text-white font-medium">
                    CLICK HERE
                  </button>
                </motion.div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Lanpage;
