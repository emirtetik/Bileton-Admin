import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

interface chartProps {
  chartHeight: number;
  data:chartDataProps[]
}

interface chartDataProps {
  name:string,
  uv:number,
  pv:number,
  fill:string
}

export default function RadialBarCharts({ chartHeight, data }: chartProps) {
 
  return (
    <ResponsiveContainer width="100%" height={chartHeight}>
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="10%"
        outerRadius="80%"
        barSize={10}
        //@ts-ignore
        data={data}
      >
        <RadialBar
          //@ts-ignore
          minAngle={15}
          label={{ position: "insideStart", fill: "#fff" }}
          background
          clockWise
          dataKey="uv"
        />
        <Legend
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
        <Tooltip />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}
