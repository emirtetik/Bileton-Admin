import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";
import getChartsData from "../../../services/services";
import { useEffect, useState } from "react";

interface chartHeightProps{
  chartHeight : number
}

export default function TwoLevelPieChart ({chartHeight}:chartHeightProps) {
  const chartsDataUrl: string = "data.json";
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  useEffect(() => {
    getChartsData(chartsDataUrl).then((res) => {
      //@ts-ignore
      setData1(res.data.twoLevelPieChartData1);
      //@ts-ignore
      setData2(res.data.twoLevelPieChartData2);
    });
  }, []);
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
