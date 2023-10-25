import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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
export default function LineCharts ({ chartHeight, data }: chartProps) {
 
    return (
      <ResponsiveContainer width="100%" height={chartHeight}>
        <LineChart
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
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#6D727F"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#EE731E" />
        </LineChart>
      </ResponsiveContainer>
    );
  }

