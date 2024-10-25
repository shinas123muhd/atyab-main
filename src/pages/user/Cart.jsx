import React, { useState } from "react";
import { Header } from "../../components";
import { Link } from "react-router-dom";
import ProductTable from "../../components/user/cart/productTable";
import { useTranslation } from "react-i18next";
import { CartEmpty, Seller } from "../../constants/images";
import { useCart } from "../../context/cart";

const Cart = () => {
const {cartItems} = useCart()

  const { t } = useTranslation();
  return (
    <>
      <Header title={"Cart"} />
      <section className="px-4 py-10 md:p-16 flex flex-col  font-poppins">
        {/* cart header  */}
        {cartItems.length === 0 ? (
          <div className="h-[80vh] flexCenter flex-col gap-3">
            <img
              src={CartEmpty}
              alt="empty cart"
              className="w-[120px] md:w-[180px] opacity-20"
            />
            <h3 className="mt-5 text-lg  md:text-2xl text-center font-medium text-gray-600">
              {t("Your Cart is Currently Empty !!")}
            </h3>
            <p className="text-gray-400 text-center text-xs md:text-sm">
              {t("You will find lot of intresting product on our 'Shop page'")}
            </p>
            <Link to={"/shop"}>
              <button className="bg-yellow-600 text-sm md:text-base mt-2 font-medium text-white rounded-xl py-3 px-6">
                {t("Return To Shop")}
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="flexBetween">
              <h3 className="md:text-4xl font-semibold">{t("Your Cart")}</h3>
              <div className="flex flex-col border-b border-black/40">
                <Link to={"/shop"}>
                  <button className="text-sm font-medium md:text-lg">
                    {t("Continue shopping")}
                  </button>
                </Link>
              </div>
            </div>
            {/* cart content section  */}
            <ProductTable />
          </>
        )}
      </section>
      <div className="px-4 md:px-16  border-t py-4 md:py-10 grid-cols-1 bg-[#F2E9E4] gap-5 md:gap-0 grid md:grid-cols-2">
        <div className="flex flex-col">
          <h4 className="text-sm md:text-base font-medium text-gray-600">
            {t("Order special instructions")}
          </h4>
          <textarea
            name=""
            id=""
            className="border border-black/40 bg-white mt-2 min-h-[100px] md:w-1/2"
          ></textarea>
        </div>
        <div className="flex gap-3 md:gap-5 items-center md:items-end flex-col">
          <div className="flexStart gap-3 md:gap-5">
            <p className="font-semibold">{t("SubTotal")}</p>
            <span className="font-medium text-gray-600">2000 AED</span>
          </div>
          <p className="text-xs md:text-sm font-medium text-gray-700">
            {t("Taxes and shipping calculating at checkout")}
          </p>
          <Link to={"/checkout"} className="w-full md:w-1/2">
            <button className="text-white font-semibold flexCenter bg-black w-full  py-3">
              {t("Check Out")}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
