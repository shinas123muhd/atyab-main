import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-300 rounded-lg p-2 shadow-md">
        <p className="text-gray-800 font-semibold">{payload[0].name}</p>
        <p className="text-gray-600">{`Value: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const SaleComparison = ({ data }) => {
  const COLORS = ["#00C49F", "#FFBB28"];
  return (
    <div className="w-64 h-64 relative z-20">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={65}
            outerRadius={100}
            fill="#e17713"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute -z-20  inset-0 flex font-poppins items-center justify-center flex-col">
        <div className="flexCenter gap-2 flex-col">
          <div className="flex  flex-col">
            <div className="flexStart gap-2">
              <div className="w-3 rounded-sm aspect-square bg-[#00C49F] "></div>
              <span className="text-gray-500 text-xs">Sales on Jan</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flexStart gap-2">
              <div className="w-3 rounded-sm aspect-square bg-[#FFBB28] "></div>
              <span className="text-gray-500 text-xs">Sales on Feb</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleComparison;
