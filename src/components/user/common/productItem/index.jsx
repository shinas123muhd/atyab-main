import React, { useState } from "react";
import { Compare, FilledLike, Like, Share } from "../../../../constants/icons";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useWishList } from "../../../../context/wishlist/WishListContext";
import { useCart } from "../../../../context/cart";

const ProductItems = ({ item }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { addToWishList, removeWishList, isInWishlist } = useWishList();
  const {addToCart , removeCartItem, cartItems} = useCart();
  
  const handleWhishList = (event) => {
    // Prevents the click event from closing the menu
    event.stopPropagation();
    if (isInWishlist(item.id)) {
      removeWishList(item.id);
    } else {
      addToWishList(item);
    }
  };
  console.log(cartItems,'cartitems')
  const handleAddCart=()=>{
    addToCart(item)
  }
  return (
    <div
      key={item.id}
      onClick={() => navigate('/cart')}
      className="flex flex-col shadow-md  rounded-md overflow-hidden relative group cursor-pointer"
    >
      <div className="flexCenter w-full md:max-h-[300px] overflow-hidden">
        <img
          src={item?.image}
          alt={item?.title}
          className="w-full group-hover:scale-110 transition-all duration-500 h-full object-cover"
        />
      </div>
      <div className="bg-white flex flex-col px-3 pt-3 pb-5">
        <h4 className="font-semibold text-sm md:text-base">{item.title}</h4>
        <span className="text-xs my-1 text-[#898989] font-medium">
          {item.brand}
        </span>
        <div className="flexStart text-sm md:text-base">
          <h4 className="font-semibold">AED ${item.price}</h4>
          <span className="text-[#B0B0B0] font-light ml-2 line-through">
            AED 300
          </span>
        </div>
      </div>
      {/* shadow effect 🎨  */}
      <div className="absolute z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 top-0 left-0 right-0 bottom-0 bg-black/50 flexCenter">
        <div className="flexCenter flex-col w-full ">
          <button onClick={handleAddCart} className="bg-white text-xs md:text-base w-[75%] py-3 font-semibold">
            {t("Add to cart")}
          </button>
          <div className="flexCenter my-5 text-white gap-2  md:gap-4 text-xs md:text-base">
            <div className=" cursor-pointer flexStart gap-1">
              <img src={Share} alt="share" className="w-5" />
              <span className="ml-1 md:ml-2">{t("Share")}</span>
            </div>
            <div className=" cursor-pointer flexStart gap-1">
              <img src={Compare} alt="compare" className="w-5" />
              <span className="ml-1 md:ml-2">{t("Compare")}</span>
            </div>
            <div
              onClick={handleWhishList}
              className=" cursor-pointer flexStart gap-1"
            >
              <img
                src={isInWishlist(item.id) ? FilledLike : Like}
                alt="like"
                className="w-5"
              />
              <span className="ml-1 md:ml-2">{t("Like")}</span>
            </div>
          </div>
        </div>
      </div>
      {/* offer  */}
      <div className="flexCenter  absolute rounded-full top-2 md:top-5 right-1 md:right-3 text-xs w-9 md:w-12 aspect-square bg-red-400 text-white">
        -30%
      </div>
    </div>
  );
};

export default ProductItems;
