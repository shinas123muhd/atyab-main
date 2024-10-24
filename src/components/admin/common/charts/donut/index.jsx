import React, { useState } from "react";
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

const DonutChart = ({ data, COLORS }) => {
  const [displayValue, setDisplayValue] = useState(data[0]);
  return (
    <div className="w-64 h-64 mt-8 relative z-40">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={65}
            outerRadius={100}
            fill="#e17713"
            paddingAngle={4}
            dataKey="value"
            cornerRadius={7}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                onClick={() => setDisplayValue(entry)}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute   -z-20 inset-0 flex font-poppins items-center justify-center flex-col">
        <div className="text-lg font-semibold">{displayValue?.name}</div>
        <div className="text-sm text-gray-500 font-medium md:font-semibold">
          {displayValue?.value}
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
