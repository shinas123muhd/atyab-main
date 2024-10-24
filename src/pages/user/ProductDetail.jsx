import React, { useState } from "react";
import { useParams } from "react-router-dom";
import GradeIcon from "@mui/icons-material/Grade";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import product1 from "../../assets/images/product1.webp";
import { FilledLike, Like, WhishList } from "../../constants/icons";
import PersonIcon from "@mui/icons-material/Person";
import { ProuductItem } from "../../components";
import { useTranslation } from "react-i18next";
const ProductDetail = () => {
  const { productId } = useParams();
  const { t } = useTranslation();
  const [quantity, setQuantity] = useState(1);
  const [whishlist, setWhishlist] = useState(false);
  const handleQuantityChange = (operation) => {
    if (operation === "increment") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(Math.max(quantity - 1, 1));
    }
  };
  const productList = [
    {
      id: 1,
      title: "Syltherine",
      brand: "on brand",
      price: "210.00",
      image: product1,
    },
    {
      id: 1,
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
    <section className="min-h-screen px-4 md:px-10 lg:px-16  font-poppins ">
      <div className="grid gap-7 md:gap-0 md:grid-cols-2 w-full my-6 md:my-24 ">
        <div className="flex order-2 md:order-1 flex-col gap-2 md:gap-3">
          <h1 className="text-lg md:text-4xl font-semibold">
            Old Cambodian Oud Oil
          </h1>
          <div className="flexStart gap-2">
            <div className="flexStart gap-1 text-yellow-500">
              <GradeIcon fontSize="inherit" />
              <GradeIcon fontSize="inherit" />
              <GradeIcon fontSize="inherit" />
              <GradeIcon fontSize="inherit" />
              <GradeIcon fontSize="inherit" />
            </div>
            <span className="text-gray-600 text-sm">7 {t("reviews")}</span>
          </div>
          <h4 className="font-semibold text-base md:text-xl text-gray-500">
            345.00 SR
          </h4>
          <div className="flexStart gap-3 my-5">
            <div
              onClick={() => setWhishlist(!whishlist)}
              className="w-12 aspect-square cursor-pointer rounded-full border flexCenter"
            >
              <img src={whishlist ? FilledLike : WhishList} alt="whishlist" />
            </div>
            <button className="text-white text-sm md:text-base font-semibold flexCenter bg-yellow-600 w-1/3 py-3">
              {t("ADD TO CART")}
            </button>
            <div className="flexBetween md:w-[150px] px-5 p-2 md:p-3 gap-4  border">
              <button
                className="text-gray-500 hover:text-gray-700 text-xl focus:outline-none"
                onClick={() => handleQuantityChange("decrement")}
              >
                <RemoveIcon fontSize="inherit" />
              </button>
              <span className="mx-2">{quantity}</span>
              <button
                className="text-gray-500 text-xl  hover:text-gray-700 focus:outline-none"
                onClick={() => handleQuantityChange("increment")}
              >
                <AddIcon fontSize="inherit" />
              </button>
            </div>
          </div>
          {/* description  */}
          <h3 className="text-base md:text-xl font-semibold text-yellow-600">
            {t("DESCRIPTION")}
          </h3>
          <div className="flex flex-col gap-2 text-sm md:text-base">
            <p>Old Cambodian Oud Oil Smell</p>
            <p>(Leather - Earthy - Tobacco - Old Wood)</p>
          </div>
          {/* advantage of use  */}
          <h3 className="text-base md:text-xl font-semibold text-yellow-600 mt-2">
            {t("ADVANTAGE OF USE")}
          </h3>
          <div className="flex flex-col gap-2 text-sm md:text-base">
            <p>
              Special occasions Suitable and compatible with any Damask rose
              family.
            </p>
            <p>
              (Sectarian - Bulgarian - Spartan - Moroccan - Indian - Tunisian)
            </p>
          </div>
        </div>
        <div className="flexCenter order-1 md:order-2 ">
          <div className="flexCenter sticky top-9">
            <img src={product1} alt="" />
          </div>
        </div>
      </div>
      {/* reviews  */}
      <div className="flex flex-col py-16">
        {/* review filter  */}
        <div className="border-y py-3 ">
          <div className="text-yellow-600 font-medium cursor-pointer  text-sm">
            {t("Top Rated")}
          </div>
        </div>
        {/* reviews  */}
        <div className="mt-6">
          {new Array(5).fill(" ").map((review, index) => (
            <div key={index} className="flexBetween py-5 border-b">
              <div className="flex flex-col gap-3">
                <div className="flexStart text-yellow-500 text-lg gap-2">
                  <GradeIcon fontSize="inherit" />
                  <GradeIcon fontSize="inherit" />
                  <GradeIcon fontSize="inherit" />
                  <GradeIcon fontSize="inherit" />
                  <GradeIcon fontSize="inherit" />
                  <span className="text-xs text-gray-500">07/02/2024</span>
                </div>
                <h5 className="font-medium text-gray-500">User</h5>
                <p className="text-gray-400  font-sans">comments are here</p>
              </div>
              <div className="w-12 aspect-square rounded-full flexCenter text-yellow-500 bg-gray-100">
                <PersonIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* related products  */}
      <div>
        <h4 className="font-semibold text-yellow-600 text-lg md:text-2xl">
          {t("Related products")}
        </h4>
        <div
          className="w-full grid grid-cols-2 md:grid-cols-2
         lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 xl:gap-7 my-5 md:my-[45px] overflow-hidden"
        >
          {productList.slice(0, 4).map((item) => (
            <ProuductItem item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
