import React, { Fragment } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";

const Order = ({ id, orders }) => {
  const { t } = useTranslation();
  return (
    <div
      key={id}
      className="h-full w-full bg-white shadow-sm rounded-lg  p-4 md:p-7"
    >
      <div className="flex md:items-center flex-col md:flex-row">
        <div
          className="bg-gray-200 px-3 md:px-5 font-medium text-sm text-gray-800 rounded-full
     w-fit py-2 md:py-3 flexStart"
        >
          <h6 className=" font-semibold">{t("Order")}</h6>
          <span className="ml-2  text-yellow-600">{id}</span>
        </div>
        <p className="text-xs md:text-sm text-gray-400 mt-2 md:mt-0 ml-3">
          {`  ${t("Order placed")}    Thu, 17th Nov 16`}
        </p>
      </div>
      <hr className=" mt-4 md:mt-7" />
      <div className="flex flex-col ">
        {orders.map((product) => (
          <Fragment key={product.id}>
            <div className="flexBetween flex-col md:flex-row  w-full  md:w-[85%] pt-5 pb-8">
              <div className="flex  w-full  cursor-pointer h-full   gap-4">
                {/* product image  */}
                <div className="w-[170px] h-[200px]  rounded-md overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col h-full py-2  gap-1">
                  <h4 className="font-medium text-sm md:text-base">
                    {product.title}
                  </h4>
                  <p className="text-sm">{product.brand}</p>
                  <p className="font-semibold mt-2">{product.price}</p>
                </div>
              </div>
              <div className="flex w-full md:w-fit mt-3 md:mt-0 flex-col">
                <p className="text-xs md:text-sm text-gray-600">
                  {" "}
                  {t("Delivery expected by")}
                </p>
                <h4 className="md:text-lg whitespace-nowrap font-semibold">
                  24 December 2024
                </h4>
              </div>
            </div>
            <hr />
          </Fragment>
        ))}

        {/* cancel order section  */}
        <div className="flexBetween pt-4">
          <button className="flexStart text-gray-500  cursor-pointer hover:text-yellow-600 transition-all duration-300">
            <CloseIcon fontSize="small" />
            <span className=" text-sm md:text-base font-medium ml-1">
              {t("CANCEL ORDER")}
            </span>
          </button>
          <h4 className="md:text-lg font-semibold">Rs.2500</h4>
        </div>
      </div>
    </div>
  );
};

export default Order;
