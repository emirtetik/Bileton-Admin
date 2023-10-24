import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import getChartsData from "../../../services/services";
import { useEffect, useState } from "react";

interface chartHeightProps {
  chartHeight: number;
}

export default function AreaCharts({ chartHeight }: chartHeightProps) {
  const chartsDataUrl: string = "data.json";
  const [data, setData] = useState([]);
  useEffect(() => {
    getChartsData(chartsDataUrl).then((res) => {
      //@ts-ignore
      setData(res.data.areaChartsData);
    });
  }, []);

  return (
    <ResponsiveContainer width="100%" height={chartHeight}>
      <AreaChart
        width={500}
        height={400}
        //@ts-ignore
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Area type="monotone" dataKey="uv" stroke="#6D727F" fill="#EE731E" />
        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  );
}
