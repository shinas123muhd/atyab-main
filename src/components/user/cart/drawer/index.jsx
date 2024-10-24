import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import product1 from "../../../../assets/images/product1.webp";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const CartDrawer = ({ isCartOpen, setCartOpen }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleQuantityChange = (operation) => {
    if (operation === "increment") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(Math.max(quantity - 1, 1));
    }
  };
  return (
    <div
      onClick={() => setCartOpen(false)}
      className={` fixed h-screen top-0 ${
        isCartOpen ? `flex` : `hidden`
      }  justify-end bottom-0 left-0 right-0 w-full bg-black/45 z-50`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={` ${
          isCartOpen ? `translate-x-0` : `translate-x-[100%]`
        } w-[85%] md:w-[32%] bg-white flex flex-col transition-all divide-red-300 delay-150 justify-between`}
      >
        <div className="flex flex-col h-full  overflow-y-auto p-3 md:p-5">
          <div className="flexBetween">
            <h4 className="md::text-lg font-semibold">
              {t("Your Shopping Cart")} <span>(2)</span>
            </h4>
            <div
              onClick={() => setCartOpen(false)}
              className="w-fit cursor-pointer"
            >
              <CloseIcon />
            </div>
          </div>
          <div className="flex flex-col gap-4 h-full  mt-4 overflow-y-auto">
            <div className="flexStart h-[120px]  gap-3 relative">
              <div className="h-full min-w-[120px]  flexCenter">
                <img
                  src={product1}
                  alt="title"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex w-full text-xs md:text-sm flex-col gap-1 md:gap-2">
                <h4 className="font-semibold">product name</h4>
                <p className="text-gray-500">product description</p>
                <div
                  className="flex justify-between  flex-col mt-2 md:mt-0
                gap-1 md:gap-0 w-fit md:w-full "
                >
                  <p>630.00 AED</p>
                  <div className="flexStart gap-2 mt-1">
                    <button
                      onClick={() => handleQuantityChange("increment")}
                      className="w-7 aspect-square hover:bg-gray-300 transition-all duration-300 flexCenter border rounded-full"
                    >
                      <AddIcon fontSize="inherit" />
                    </button>
                    <div>{quantity}</div>
                    <button
                      onClick={() => handleQuantityChange("decrement")}
                      className="w-7 aspect-square hover:bg-gray-300 transition-all duration-300 flexCenter border rounded-full"
                    >
                      <RemoveIcon fontSize="inherit" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute top-2 right-2 text-gray-300 cursor-pointer hover:text-gray-500 transition-all duration-300">
                <DeleteRoundedIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 md:p-7  bg-primary  flex flex-col">
          <p className="text-center w-full text-gray-600 text-xs md:text-sm">
            {t("Congrats! your delivery is")} <b>{t("Free")}</b>
          </p>
          <div className="flexBetween mt-2">
            <div className="flexStart md:text-lg">
              <h4 className="font-semibold">{t("Total")}</h4>
              <span className="text-[10px] ml-2">{t("(Including tax)")}</span>
            </div>
            <div className="font-semibold">315AED</div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-3 text-xs md:text-sm">
            <button
              onClick={() => {
                setCartOpen(false), navigate("/cart");
              }}
              className="w-full py-4 bg-yellow-600 text-white rounded-full flexCenter"
            >
              {t("View Cart")}
            </button>
            <button
              onClick={() => {
                setCartOpen(false), navigate("/shop");
              }}
              className="w-full py-4 text-yellow-600 border border-yellow-600 rounded-full flexCenter"
            >
              {t("Continue Shoping")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
