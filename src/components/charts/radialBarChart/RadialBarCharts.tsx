import { useEffect, useState } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import getChartsData from "../../../services/services";

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

interface chartHeightProps {
  chartHeight: number;
}
export default function RadialBarCharts({ chartHeight }: chartHeightProps) {
  const chartsDataUrl: string = "data.json";
  const [data, setData] = useState([]);
  useEffect(() => {
    getChartsData(chartsDataUrl).then((res) => {
      //@ts-ignore
      setData(res.data.radialBarChartsData);
    });
  }, []);
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
