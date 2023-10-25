import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface chartProps {
  chartHeight: number;
  data:chartDataProps[]
}

interface chartDataProps {
  name:string,
  uv:number,
  pv:number,
  amt:number
}

export default function AreaCharts({ chartHeight, data }: chartProps) {

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
