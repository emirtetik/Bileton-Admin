import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import getChartsData from "../../../services/services";

interface chartHeightProps {
  chartHeight: number;
}
export default function BarCharts({ chartHeight }: chartHeightProps) {
  const chartsDataUrl: string = "data.json";
  const [data, setData] = useState([]);
  useEffect(() => {
    getChartsData(chartsDataUrl).then((res) => {
      //@ts-ignore
      setData(res.data.barChartsData);
    });
  }, []);
  return (
    <ResponsiveContainer width="100%" height={chartHeight}>
      <BarChart
        width={500}
        height={300}
        //@ts-ignore
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="pv"
          fill="#6D727F"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="uv"
          fill="#EE731E"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
