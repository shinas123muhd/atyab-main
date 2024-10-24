import React, { useState } from "react";
import RightArrow from "../../../assets/svg/rightArrow.svg";
import Arrow from "../../../assets/svg/arrow.svg";
import {
  GiftSlider1,
  GiftSlider2,
  GiftSlider3,
} from "../../../constants/images";
import { useTranslation } from "react-i18next";
const GiftSets = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const getNextSlides = () => {
    const nextSlides = [];
    for (let i = 1; i <= 2; i++) {
      const nextIndex = (currentIndex + i) % slides.length;
      nextSlides.push(slides[nextIndex]);
    }
    return nextSlides;
  };

  const slides = [
    {
      title: "MAGIC SPELLS",
      subtitle: "Byredo Oud",
      image: GiftSlider1,
    },
    {
      title: "Fragrance Set",
      subtitle: "Luxury Collection",
      image: GiftSlider2,
    },
    {
      title: "Essence Collection",
      subtitle: "Premium Scents",
      image: GiftSlider3,
    },
  ];
  return (
    <div className="py-12 bg-white font-poppins h-screen grid grid-cols-3 gap-10 xl:gap-0 xl:grid-cols-5 text-[#3A3A3A]">
      <div className=" flexCenter col-span-3 xl:col-span-2">
        <div className="flex gap-3  flex-col items-center xl:items-start">
          <h4 className="font-bold text-4xl">{t("Gift Sets")}</h4>
          <p>{t("Discover curated gift sets for your loved ones.")}</p>
          <button className="bg-[#22223B] w-fit text-white py-3 rounded-lg px-5 text-sm font-semibold">
            {t("Explore More")}
          </button>
        </div>
      </div>
      {/* Right column (slider) */}
      <div className="relative marker md:ml-5  xl:ml-0 flex gap-5 col-span-3   md:overflow-hidden">
        {/* Current slide */}
        <div className=" min-w-full md:min-w-[380px]  h-full relative cursor-pointer">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
            className="w-full min-h-[340px] h-full bg-center bg-cover duration-500 object-cover"
          >
            {/* Slide content */}
            <div className="absolute bottom-8 left-8 flex items-end h-full ">
              <div className="bg-white/80 py-6 p-4 shadow-md">
                <div className="text-[#616161] font-medium text-sm w-full text-end pr-2 flexEnd">
                  <span>0{currentIndex + 1} </span>{" "}
                  <hr className="w-3 h-[2px] mx-2 bg-[#616161]" />{" "}
                  <p> {slides[currentIndex].subtitle}</p>
                </div>
                <h3 className="text-xl font-semibold">
                  {slides[currentIndex].title}
                </h3>
              </div>
              <div className="p-3 bg-[#22223B] cursor-pointer w-10 flexCenter aspect-square ml-2">
                <img src={RightArrow} alt="right arrow" />
              </div>
            </div>
          </div>
          {/* dot navigation visible only in mobile view  */}
          <div className="bg-white md:hidden h-[100px] flexCenter gap-3 pl-1">
            {slides.map((_, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`rounded-full    cursor-pointer w-6 
              flexCenter aspect-square transition-all duration-300 ${
                currentIndex === slideIndex && "border border-[#22223B]"
              }`}
              >
                <div
                  className={`w-[10px] aspect-square ${
                    currentIndex === slideIndex
                      ? "bg-[#22223B]"
                      : `bg-[#D8D8D8]`
                  }  rounded-full`}
                ></div>
              </div>
            ))}
          </div>
        </div>

        <div className=" hidden md:flex w-full h-full  flex-col ">
          {/* Next slides */}
          <div className="h-full relative  flex gap-5 overflow-hidden transition-all duration-500">
            {getNextSlides().map((slide, index) => (
              <div key={index} className="h-full min-w-[370px] relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            {/* Navigation arrows */}
            <div
              onClick={prevSlide}
              className="hidden xl:flexCenter absolute top-1/2 left-0 bg-white w-12  aspect-square rounded-full shadow-lg  -translate-y-1/2 cursor-pointer"
            >
              <img src={Arrow} alt="arrow" className="w-2 rotate-180" />
            </div>
            <div
              onClick={nextSlide}
              className="hidden xl:flexCenter absolute top-1/2 left-[41%] 2xl:left-[45%]  bg-white w-12  aspect-square rounded-full shadow-lg -translate-y-1/2 cursor-pointer"
            >
              <img src={Arrow} alt="arrow" className="w-2 " />
            </div>
          </div>

          {/* Dots */}
          <div className="bg-white h-[100px] flexStart gap-3 pl-1">
            {slides.map((_, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`rounded-full    cursor-pointer w-6 
              flexCenter aspect-square transition-all duration-300 ${
                currentIndex === slideIndex && "border border-[#22223B]"
              }`}
              >
                <div
                  className={`w-[10px] aspect-square ${
                    currentIndex === slideIndex
                      ? "bg-[#22223B]"
                      : `bg-[#D8D8D8]`
                  }  rounded-full`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftSets;
