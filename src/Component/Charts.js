import React from "react";
import { ResponsiveContainer, AreaChart, Area } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Charts() {
  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
              <stop offset="75%" stopColor="#00FFFF" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <Area dataKey="uv" strok="#2451B7" fill="url(#color)" />
          <Area dataKey="pv" strok="#F19CBB" fill="url(#color)" />
          <Area dataKey="amt" strok="#00FFFF" fill="url(#color)" />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}
