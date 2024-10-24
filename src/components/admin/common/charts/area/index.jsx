import {
  Area,
  AreaChart,
  ReferenceDot,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const IncomeGraph = ({
  data,
  selectedMonth,
  strokColor = "#22C55E",
  fillColor = "#D5F4E1",
}) => {
  const selectedPoint = data.find((item) => item.name === selectedMonth);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={350}
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: -80,
          bottom: -30,
        }}
      >
        <XAxis tick={false} axisLine={false} />
        <YAxis tick={false} axisLine={false} />
        <Tooltip />

        <Area
          type="monotone"
          dataKey="actualIncome"
          stroke={strokColor}
          fill={fillColor}
          strokeWidth={3.4}
          fillOpacity={0.5}
        />
        {selectedPoint && (
          <ReferenceDot
            x={selectedPoint.name}
            y={selectedPoint.actualIncome}
            r={8}
            fill="#00ff00"
            stroke="#ffffff"
            strokeWidth={5}
            label={{ value: `${selectedPoint.actualIncome}`, position: "top" }}
          ></ReferenceDot>
        )}
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default IncomeGraph;
