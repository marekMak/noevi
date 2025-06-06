"use client";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Graph = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = months.map((month, index) => {
    let value = index * 3;

    return { month, kWh: value };
  });
  return (
    <div className="px-4 md:px-20 mx-auto space-y-4 flex flex-col items-start justify-start mt-4">
      <h2 className="text-2xl font-bold text-greeno">Graphic information</h2>
      <div className="w-full min-h-60">
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="month" />
          <YAxis unit="kWh" />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line
            type="monotone"
            dataKey="kWh"
            stroke="#6cbe45"
            strokeWidth={3}
          />
        </LineChart>
      </div>
    </div>
  );
};

export default Graph;
