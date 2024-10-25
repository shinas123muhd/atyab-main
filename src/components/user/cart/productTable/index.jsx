import React, { useState } from "react";

import CartItems from "../cartItem";
import { useTranslation } from "react-i18next";
import { useCart } from "../../../../context/cart";
const ProductTable = () => {
  const { t } = useTranslation();

const {cartItems,removeCartItem} = useCart()
  return (
    <table className="w-full my-10 ">
      <thead>
        <tr className="text-xs md:text-sm text-gray-600 border-b">
          <th className="text-left font-medium  pb-3">{t("PRODUCT")}</th>
          <th className="hidden md:block text-left font-medium  pb-3">
            {t("QUANTITY")}
          </th>
          <th className="text-right font-medium pb-3 ">{t("TOTAL")}</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <CartItems
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            count={item.count}
            ProductMeasure={item.ProductMeasure}
            price={item.price}
            removeItemFromCart={removeCartItem}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
