import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const MyLineChart = () => {
  const data = [
    {
      name: "Supplier A",
      price: 4000,
      pv: 2400,
      amt: 2400,
      y: "panku",
    },
    {
      name: "Supplier B",
      price: 3000,
      pv: 1398,
      amt: 2210,
      y: "hangku",
    },
    {
      name: "Supplier C",
      price: 2000,
      pv: 9800,
      amt: 2290,
      y: "janku",
    },
    {
      name: "Supplier d",
      price: 2780,
      pv: 3908,
      amt: 2000,
      y: "fangku",
    },
    {
      name: "Supplier E",
      price: 1890,
      pv: 4800,
      amt: 2181,
      y: "kongku",
    },
    {
      name: "Supplier F",
      price: 2390,
      pv: 3800,
      amt: 2500,
      y: "furre",
    },
    {
      name: "Supplier G",
      price: 3490,
      pv: 4300,
      amt: 2100,
      y: "jurray",
    },
  ];

  return (
    <LineChart width={1000} height={500} data={data}>
      <Line dataKey="price"></Line>
      <Line dataKey={"amt"}></Line>
      <Line dataKey={"pv"}></Line>
      <XAxis dataKey={"name"}></XAxis>
      <Tooltip></Tooltip>
      <YAxis></YAxis>
    </LineChart>
  );
};

export default MyLineChart;
