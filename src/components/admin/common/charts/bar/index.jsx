import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from "recharts";

const EearningGraph = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{ top: 20, right: 20, left: -45, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 5" />
        <XAxis dataKey="month" fontSize={10} />
        <YAxis tick={false} axisLine={false} />
        <Tooltip cursor={{ fill: "transparent" }} />
        <Bar
          dataKey="value1"
          fill="#93c5fd"
          activeBar={<Rectangle fill="#9ec0f7" />}
        />
        <Bar
          dataKey="value2"
          fill="#3b82f6"
          activeBar={<Rectangle fill="#6da3fa" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default EearningGraph;
