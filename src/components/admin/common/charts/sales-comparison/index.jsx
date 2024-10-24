import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const SalesTrendGraph = ({ monthlyData, weeklyData, dailyData }) => {
  const [timeFrame, setTimeFrame] = useState("daily");

  const getData = () => {
    switch (timeFrame) {
      case "daily":
        return dailyData;
      case "weekly":
        return weeklyData;
      case "monthly":
        return monthlyData;
      default:
        return dailyData;
    }
  };

  const renderChart = () => {
    const data = getData();
    if (timeFrame === "daily") {
      return (
        <BarChart data={data} margin={{ left: -18, right: 7 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" fontSize={12} />
          <YAxis fontSize={12} />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Bar dataKey="sales" fill="#3b82f6" barSize={100}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(index)} />
            ))}
          </Bar>
        </BarChart>
      );
    } else {
      return (
        <LineChart data={data} margin={{ left: -18, right: 7 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" fontSize={12} />
          <YAxis fontSize={12} axisLine={false} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="current"
            name="Current"
            stroke="#FFA500"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="previous"
            name="Previous"
            stroke="#00C49F"
            strokeWidth={2}
          />
        </LineChart>
      );
    }
  };
  const getBarColor = (index) => {
    if (timeFrame === "daily") {
      return index === 0 ? "#FFA500" : "#00C49F"; // Orange for Today, Blue for Yesterday
    }
  };
  return (
    <div className="bg-white col-span-4 lg:col-span-3 rounded-xl shadow-md flex-col flex p-3 px-3 md:p-5 md:px-6">
      <div className="flexBetween">
        <h4 className="md:text-lg font-semibold py-2">Sales Trend</h4>
        <div
          className="w-52 bg-gray-200 h-full
         rounded-lg text-xs font-medium gap-1 text-gray-600 
         grid grid-cols-3 p-1"
        >
          {["daily", "weekly", "monthly"].map((option) => (
            <button
              onClick={() => setTimeFrame(option)}
              key={option}
              className={` ${
                timeFrame === option ? `bg-white` : `bg-transparent`
              } hover:bg-white rounded-lg`}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="h-full mt-10 w-full">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            {renderChart()}
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SalesTrendGraph;
