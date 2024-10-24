import React, { useState } from "react";
import product1 from "../../assets/images/product1.webp";
import { RedLike } from "../../constants/icons";
import CloseIcon from "@mui/icons-material/Close";
import { Empty } from "../../constants/images";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Header } from "../../components";
const WhishList = () => {
  const { t } = useTranslation();
  const dummyData = [
    {
      id: 1,
      title: "product 1",
      price: "2000",
      actualPrice: "4000",
      image: product1,
    },
    {
      id: 2,
      title: "product 2",
      price: "2000",
      actualPrice: "4000",
      image: product1,
    },
    {
      id: 3,
      title: "product 3",
      price: "2000",
      actualPrice: "4000",
      image: product1,
    },
    {
      id: 4,
      title: "product 4",
      price: "2000",
      actualPrice: "4000",
      image: product1,
    },
    {
      id: 5,
      title: "product 5",
      price: "2000",
      actualPrice: "4000",
      image: product1,
    },
  ];
  const [filterdWhishList, setFilteredWhishList] = useState(dummyData);

  const handleRemoveWhishList = (id) => {
    const filtered = filterdWhishList.filter((item) => item.id !== id);
    setFilteredWhishList(filtered);
  };
  return (
    <>
      <Header title={t("Wishlist")} />
      <section className="min-h-screen bg-[#F2E9E4] px-4 md:px-16 py-16">
        {filterdWhishList.length === 0 ? (
          <div className="w-full h-full py-16 flexCenter flex-col gap-2">
            <img
              src={Empty}
              alt="empty wish list"
              className="w-[150px] opacity-10 "
            />
            <h3 className="mt-5 text-2xl font-medium text-gray-600">
              {t("Your wishlist is empty !!")}
            </h3>
            <p className="text-gray-400">
              {t("Explore more and shortlist some items")}
            </p>
            <Link to={"/shop"}>
              <button className="bg-yellow-600 mt-2 font-medium text-white rounded-xl py-3 px-6">
                {t("Explore")}
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3  gap-y-4 gap-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4">
            {filterdWhishList.map((item) => (
              <div
                key={item.id}
                className="flex flex-col group  bg-white relative md:border p-1 md:p-3 md:shadow-md rounded-2xl"
              >
                <div className="flexCenter  h-full max-h-[180px] sm:max-h-[280px] overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col my-2 px-2 md:px-0">
                  <h4 className="font-semibold text-sm md:text-lg">
                    {item.title}
                  </h4>
                  <div className="flexStart gap-2  text-xs md:text-base font-medium text-gray-400">
                    <p className="text-yellow-600 ">Rs.{item.price}</p>
                    <p className="line-through ">Rs.{item.actualPrice}</p>
                  </div>
                  <div className="flexBetween">
                    <button
                      className="w-fit bg-yellow-500 font-medium text-white 
                  px-5 py-3 text-xs md:text-sm mt-2 rounded-md"
                    >
                      {t("Add to cart")}
                    </button>
                    <div className=" cursor-pointer   w-12 aspect-square rounded-full flexCenter">
                      <img src={RedLike} alt="" className="w-5 md:w-8" />
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => handleRemoveWhishList(item.id)}
                  className=" flexCenter md:hidden  group-hover:flexCenter  absolute top-1 md:top-4 
              right-1 md:right-4 bg-white cursor-pointer w-6 md:w-8 aspect-square rounded-full"
                >
                  <CloseIcon className="text-black" fontSize="small" />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default WhishList;
