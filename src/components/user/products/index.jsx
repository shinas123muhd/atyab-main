import React from "react";
import product1 from "../../../assets/images/product1.webp";
import { Link } from "react-router-dom";
import { ProuductItem } from "../..";
import { useTranslation } from "react-i18next";
const Products = () => {
  const { t } = useTranslation();
  const productList = [
    {
      id: 1,
      title: "Syltherine",
      brand: "on brand",
      price: "210.00",
      image: product1,
    },
    {
      id: 5,
      title: "Syltherine",
      brand: "on brand",
      price: "210.00",
      image: product1,
    },
    {
      id: 2,
      title: "Syltherine",
      brand: "on brand",
      price: "210.00",
      image: product1,
    },
    {
      id: 3,
      title: "Syltherine",
      brand: "on brand",
      price: "210.00",
      image: product1,
    },
    {
      id: 4,
      title: "Syltherine",
      brand: "on brand",
      price: "210.00",
      image: product1,
    },
  ];
  return (
    <div className="px-4 lg:px-8 xl:px-20 2xl:px-32  bg-primary flex flex-col items-center pb-14 font-poppins text-secondary">
      <h3 className="text-3xl font-bold">{t("Our Product")}</h3>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 xl:gap-7 my-[45px] overflow-hidden">
        {productList.map((item) => (
          <ProuductItem key={item.id} item={item} />
        ))}
      </div>
      <Link to={"/shop"}>
        <button className="py-3 w-[230px] hover:bg-[#22223B] hover:text-white transition-all duration-300 flexCenter font-semibold border-black border bg-white">
          {t("Show More")}
        </button>
      </Link>
    </div>
  );
};

export default Products;
