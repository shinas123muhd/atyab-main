import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FilledLike, WhishList } from "../../../../constants/icons";

const ProductCard = ({ product, handleWhislist, whishList }) => {
  const { t } = useTranslation();
  return (
    <div className="flex group flex-col">
      <Link key={product.id} to={`/product/${product.id}`}>
        <div className="max-h-[150px] md:max-h-[300px] rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover hover:scale-110 transition-all
      duration-300 cursor-pointer"
          />
        </div>
      </Link>

      <div className="flexCenter gap-2 h-[40px] mt-3 md:opacity-0 group-hover:opacity-100 transition-all duration-300">
        <Link key={product.id} to={`/product/${product.id}`} className="w-full">
          <button
            className="text-white bg-[#22223B] h-full 
      flexCenter py-3 md:py-2 rounded-sm text-xs md:text-sm w-full"
          >
            {t("DISCOVER")}
          </button>
        </Link>
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent navigation
            handleWhislist(product.id);
          }}
          className={`h-full aspect-square border  border-[#22223B]/50 rounded-md
        flexCenter
        `}
        >
          <img
            src={whishList.includes(product.id) ? FilledLike : WhishList}
            alt="whislist"
          />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
