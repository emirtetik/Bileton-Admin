import getChartsData from "../../../services/services";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ["#6D727F", "#897269", "#C07342", "#EE731E"];

const RADIAN = Math.PI / 180;
//@ts-ignore
const renderCustomizedLabel = ({cx,cy,midAngle,innerRadius,outerRadius,percent,index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

interface chartHeightProps {
  chartHeight: number;
}
export default function PieChartWithCustomizedLabel({
  chartHeight,
}: chartHeightProps) {
  const chartsDataUrl: string = "data.json";
  const [data, setData] = useState([]);
  useEffect(() => {
    getChartsData(chartsDataUrl).then((res) => {
      //@ts-ignore
      setData(res.data.pieChartWithCustomizedLabelData);
    });
  }, []);
  return (
    <ResponsiveContainer width="100%" height={chartHeight}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
