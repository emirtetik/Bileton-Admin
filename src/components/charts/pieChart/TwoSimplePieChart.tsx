import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

interface chartProps {
  chartHeight: number;
  data:chartDataProps[]
}

interface chartDataProps {
  name:string,
  value:number
}
export default function TwoSimplePieChart({ chartHeight, data }: chartProps) {
  
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
