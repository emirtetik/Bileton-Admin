import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";

interface chartProps {
  chartHeight: number;
  data1: chartDataProps[];
  data2: chartDataProps[];
}

interface chartDataProps {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

export default function TwoLevelPieChart({
  chartHeight,
  data1,
  data2,
}: chartProps) {
  return (
    <ResponsiveContainer width="100%" height={chartHeight}>
      <PieChart width={400} height={400}>
        <Pie
          isAnimationActive={true}
          //@ts-ignore
          data={data1}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#EE731E"
        />
        <Pie
          isAnimationActive={true}
          //@ts-ignore
          data={data2}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#6D727F"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
