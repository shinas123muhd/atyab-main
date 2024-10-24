import React from "react";
import IncomeGraph from "../../charts/area";
import { Increment } from "../../../../../constants/icons";

const ReportCard = ({
  data,
  title,
  value,
  lableIcon,
  growth,
  strokColor,
  fill,
}) => {
  return (
    <div className=" 2xl:h-fit bg-white p-5 xl:p-4 2xl:p-5 shadow-md rounded-2xl flex flex-col justify-between gap-4">
      <div className="flexBetween">
        <div className="flexStart">
          <div className="flexCenter">
            <img src={lableIcon} alt="total sales" />
          </div>
          <div className="flex flex-col text-sm ml-3 ">
            <h5 className="text-gray-500 text-xs lg:text-sm whitespace-nowrap md:text-base">
              {title}
            </h5>
            <span className="text-xl font-semibold">{value}</span>
          </div>
        </div>

        <div className="flexStart">
          <img src={Increment} alt="increment" />
          <span className="text-sm font-semibold text-gray-600 ml-2">
            {growth}%
          </span>
        </div>
      </div>
      <div className="h-[50px] max-h-[150px] md:h-full 2xl:h-[50px]  w-full">
        <IncomeGraph data={data} strokColor={strokColor} fillColor={fill} />
      </div>
    </div>
  );
};

export default ReportCard;
