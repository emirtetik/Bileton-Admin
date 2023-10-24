import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";
import getChartsData from "../../../services/services";
import { useEffect, useState } from "react";

interface chartHeightProps {
  chartHeight: number;
}
export default function StraightAnglePieChart({
  chartHeight,
}: chartHeightProps) {
  const chartsDataUrl: string = "data.json";
  const [data, setData] = useState([]);
  useEffect(() => {
    getChartsData(chartsDataUrl).then((res) => {
      //@ts-ignore
      setData(res.data.straightAnglePieChartData);
    });
  }, []);
  return (
    <ResponsiveContainer width="100%" height={chartHeight}>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          //@ts-ignore
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#EE731E"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}