import React from "react";
import EearningGraph from "../../common/charts/bar";
import { Increment } from "../../../../constants/icons";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const EarningRevenue = ({ data }) => {
  return (
    <div className=" col-span-2 min-h-[450px] sm:col-span-4  bg-white shadow-md rounded-lg p-4 md:py-6 flex flex-col">
      <div className="flexBetween ">
        <h3 className="text-lg font-semibold">Earnings revenue</h3>
        <span className="cursor-pointer">
          <MoreHorizIcon />
        </span>
      </div>
      <div className="flexStart gap-10">
        <div className="flex flex-col mt-5">
          <div className="flexStart text-sm">
            <div className="w-3 aspect-square rounded-full bg-red-100"></div>
            <span className="ml-2 text-gray-500 text-xs">Revenue</span>
          </div>
          <div className="flexStart gap-3 mt-1">
            <h4 className="md:text-lg font-semibold">$37,802</h4>
            <div className="flexStart gap-2">
              <img src={Increment} alt="growth" />
              <span className="text-xs md:text-sm font-medium"> 0.56%</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-5">
          <div className="flexStart text-sm">
            <div className="w-3 aspect-square rounded-full bg-red-100"></div>
            <span className="ml-2 text-gray-500 text-xs">Order</span>
          </div>
          <div className="flexStart gap-3 mt-1">
            <h4 className="md:text-lg font-semibold">$37,802</h4>
            <div className="flexStart gap-2">
              <img src={Increment} alt="growth" />
              <span className="text-xs md:text-sm font-medium"> 0.56%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full">
        <EearningGraph data={data} />
      </div>
    </div>
  );
};

export default EarningRevenue;
