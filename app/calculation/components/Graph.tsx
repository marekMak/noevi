"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface GraphProps {
  electricHeating: boolean;
  heatingMonths: number;
}

const Graph = ({ electricHeating, heatingMonths }: GraphProps) => {
  const months = [
    { name: "Jan", energy: 6 },
    { name: "Feb", energy: 5 },
    { name: "Mar", energy: 2 },
    { name: "Apr", energy: 2 },
    { name: "May", energy: 2 },
    { name: "Jun", energy: 1 },
    { name: "Jul", energy: 1 },
    { name: "Aug", energy: 1 },
    { name: "Sep", energy: 4 },
    { name: "Oct", energy: 5 },
    { name: "Nov", energy: 5 },
    { name: "Dec", energy: 6 },
  ];

  const winterMonths = [11, 0, 1, 2];

  const summerMonths = [5, 6, 7];

  const data = months.map((month, index) => {
    let weight = 1;

    if (electricHeating) {
      const heatingMonthsIndices = winterMonths.slice(0, heatingMonths);

      if (heatingMonthsIndices.includes(index)) {
        weight = 2.5;
      }
    } else {
      if (summerMonths.includes(index)) {
        weight = 2.5;
      }
    }

    return {
      month: month.name,
      kWh: Math.round(month.energy * weight),
    };
  });

  return (
    <div className="bg-white p-6">
      <h2 className="text-2xl font-bold text-greeno -mt-2 mb-6">
        Estimated Monthly Breakdown
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value} kWh`} />
          <Bar dataKey="kWh" fill="#5cb85c" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
