import React, { useState } from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const CartItems = ({
  image,
  title,
  count,
  ProductMeasure,
  price,
  id,
  removeItemFromCart,
}) => {
  const [quantity, setQuantity] = useState(count);

  const handleQuantityChange = (operation) => {
    if (operation === "increment") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(Math.max(quantity - 1, 1));
    }
  };
  return (
    <tr key={id}>
      <td className="">
        <div className="flex items-center h-[200px]  py-5">
          <img
            src={image}
            alt={title}
            className="md:w-[120px] h-full md:mr-4 object-cover"
          />
          <div className="h-full flex flex-col gap-1 ml-2">
            <h3 className="font-medium text-sm md:text-base flex-wrap">
              {title}
            </h3>
            <p className="text-gray-500 text-xs md:text-base">
              {ProductMeasure}ML
            </p>
            <p className="text-xs md:text-sm font-semibold mt-2 w-fit text-gray-700 px-1">
              {price}
            </p>
            <div className="flexStart md:hidden gap-3 md:gap-6   ">
              <div className="flexBetween md:w-[180px] px-5 p-2 md:p-3 gap-4  md:gap-9  border">
                <button
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  onClick={() => handleQuantityChange("decrement")}
                >
                  -
                </button>
                <span className="mx-2">{quantity}</span>
                <button
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  onClick={() => handleQuantityChange("increment")}
                >
                  +
                </button>
              </div>
              <div
                onClick={() => removeItemFromCart(id)}
                className="cursor-pointer group"
              >
                <DeleteOutlinedIcon className="text-gray-600 group-hover:text-gray-800 " />
              </div>
            </div>
          </div>
        </div>
      </td>
      <td className="hidden md:block align-top py-5">
        <div className="flexStart gap-6 ">
          <div className="flexBetween w-[180px] px-5 md:p-3 gap-9  border">
            <button
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => handleQuantityChange("decrement")}
            >
              -
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => handleQuantityChange("increment")}
            >
              +
            </button>
          </div>
          <div
            onClick={() => removeItemFromCart(id)}
            className="cursor-pointer group"
          >
            <DeleteOutlinedIcon className="text-gray-600 group-hover:text-gray-800 " />
          </div>
        </div>
      </td>

      <td className="text-right font-semibold align-top py-8   text-sm md:text-base">
        {price * quantity}
      </td>
    </tr>
  );
};

export default CartItems;