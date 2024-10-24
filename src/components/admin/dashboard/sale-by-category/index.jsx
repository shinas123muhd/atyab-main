import React from "react";
import DonutChart from "../../common/charts/donut";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Increment } from "../../../../constants/icons";
import DropDown from "../../common/dropDown";

const SaleByCategories = ({ data }) => {
  const COLORS = ["#00C49F", "#FFBB28", "#FF8042", "#a855f7", "#FF6384"];

  return (
    <div className="col-span-2 bg-white rounded-lg shadow-md   flex flex-col p-4 md:py-6">
      <div className="flexBetween ">
        <h3 className="text-lg font-semibold">Sale by category</h3>
        <span className="cursor-pointer">
          <MoreHorizIcon />
        </span>
      </div>
      <div className="flexBetween mt-5 text-gray-400 text-sm">
        <p className="text-xs md:text-sm">Total Mar 20,2023</p>
        <DropDown options={["Year", "Month", "Week"]} />
      </div>
      <div className="flexStart gap-3 mt-1">
        <h4 className="text-lg font-semibold">$37,802</h4>
        <div className="flexStart gap-2">
          <img src={Increment} alt="growth" />
          <span className="text-xs md:text-sm font-medium"> 0.56%</span>
        </div>
      </div>
      <div className=" flexCenter">
        <DonutChart data={data} COLORS={COLORS} />
      </div>
      <div className="w-full h-full py-16 ">
        <div className="grid  grid-cols-2 gap-y-7 2xl:grid-cols-3">
          {data.map((item, index) => (
            <div key={index} className="flexStart text-xs text-gray-600 ">
              <div
                style={{ background: COLORS[index] }}
                className={`w-[14px] aspect-square   rounded-sm`}
              ></div>
              <span className="ml-2">{item?.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaleByCategories;
