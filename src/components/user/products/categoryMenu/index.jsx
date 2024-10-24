import React from "react";
import { useTranslation } from "react-i18next";

const CategoryMenu = ({ setValue, options }) => {
  const { t } = useTranslation();
  return (
    <div className=" hidden md:flex flex-initial w-[170px]  min-h-screen md:w-[220px] xl:w-[300px]  flex-col ">
      <h4 className="text-[#22223B] font-semibold text-lg md:text-2xl">
        {t("All Categories")}
      </h4>
      <div className="mt-5">
        <ul>
          {options.map((item, index) => (
            <li
              onClick={() => setValue(item.title)}
              className={`cursor-pointer hover:translate-x-2  hover:bg-white px-2 transition-all border-[#666666]/20 duration-300 py-5  ${
                index !== options.length - 1 && `border-b`
              }`}
              key={item.id}
            >
              {t(`${item.title}`)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryMenu;
