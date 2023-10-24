import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import getChartsData from "../../../services/services";
import { useEffect, useState } from "react";

interface chartHeightProps {
  chartHeight: number;
}
export default function TwoSimplePieChart({ chartHeight }: chartHeightProps) {
  const chartsDataUrl: string = "data.json";
  const [data, setData] = useState([]);
  useEffect(() => {
    getChartsData(chartsDataUrl).then((res) => {
      //@ts-ignore
      setData(res.data.twoSimplePieChart1Data);
    });
  }, []);
  return (
    <ResponsiveContainer width="100%" height={chartHeight}>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          //@ts-ignore
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#6D727F"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
