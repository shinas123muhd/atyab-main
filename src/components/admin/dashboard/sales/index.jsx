import React from "react";
import SaleComparison from "../../common/charts/sales";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Sales = ({ data }) => {
  return (
    <div className="bg-white col-span-4  xl:col-span-2 p-5 rounded-xl shadow-md ">
      <div className="flexBetween">
        <h4 className="text-lg font-semibold text-gray-800">Sales</h4>
        <span className="cursor-pointer">
          <MoreHorizIcon />
        </span>
      </div>
      <div className="flexCenter  h-fit  w-full  ">
        <SaleComparison data={data} />
      </div>
    </div>
  );
};

export default Sales;
