import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";

interface chartProps {
  chartHeight: number;
  data:chartDataProps[]
}

interface chartDataProps {
  name:string,
  value:number
}

export default function StraightAnglePieChart({ chartHeight, data }: chartProps) {
  
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
