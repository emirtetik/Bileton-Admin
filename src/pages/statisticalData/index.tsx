import AreaCharts from "../../components/charts/areaChart/AreaCharts";
import BarCharts from "../../components/charts/barChart/BarCharts";
import LineCharts from "../../components/charts/lineChart/LineCharts";
import RadialBarCharts from "../../components/charts/radialBarChart/RadialBarCharts";
import CustomActiveShapePieChart from "../../components/charts/pieChart/CustomActiveShapePieChart";
import PieChartWithCustomizedLabel from "../../components/charts/pieChart/PieChartWithCustomizedLabel";
import StraightAnglePieChart from "../../components/charts/pieChart/StraightAnglePieChart";
import TwoLevelPieChart from "../../components/charts/pieChart/TwoLevelPieChart";
import TwoSimplePieChart from "../../components/charts/pieChart/TwoSimplePieChart";
import TwoSimplePieChart2 from "../../components/charts/pieChart/TwoSimplePieChart2";
import { useEffect, useState } from "react";
import getChartsData from "../../services/services";

export default function StatisticalData() {
  const chartsDataUrl: string = "data.json";
  const [data, setData] = useState({
    areaChartsData: [],
    barChartsData: [],
    lineChartsData: [],
    radialBarChartsData: [],
    twoSimplePieChart2Data: [],
    twoLevelPieChartData1: [],
    twoLevelPieChartData2: [],
    pieChartWithCustomizedLabelData: [],
    customActiveShapePieChartData: [],
    straightAnglePieChartData: [],
    twoSimplePieChart1Data: [],
  });
  useEffect(() => {
    getChartsData(chartsDataUrl).then((res) => {
      setData(res.data);
    });
  }, []);

  const chartHeight = 350;

  return (
    <div className="max-w-6xl mx-auto -z-10">
      <div className="grid grid-cols-2 pt-10">
        <div className="mb-5">
          <h1 className="mb-5 text-xl font-semibold text-center">Area Chart</h1>

          <AreaCharts chartHeight={chartHeight} data={data.areaChartsData} />
        </div>
        <div className="mb-5">
          <h1 className="mb-5 text-xl font-semibold text-center">Bar Chart</h1>
          <BarCharts chartHeight={chartHeight} data={data.barChartsData} />
        </div>
        <div className="mb-5">
          <h1 className="mb-5 text-xl font-semibold text-center">Line Chart</h1>
          <LineCharts chartHeight={chartHeight} data={data.lineChartsData} />
        </div>
        <div className="mb-5">
          <h1 className="mb-5 text-xl font-semibold text-center">
            Radial Bar Chart
          </h1>
          <RadialBarCharts
            chartHeight={chartHeight}
            data={data.radialBarChartsData}
          />
        </div>
        <div className="mb-5">
          <h1 className="mb-5 text-xl font-semibold text-center">
            Custom Active Shape Pie Chart Chart
          </h1>
          <CustomActiveShapePieChart
            chartHeight={chartHeight}
            data={data.customActiveShapePieChartData}
          />
        </div>
        <div className="mb-5">
          <h1 className="mb-5 text-xl font-semibold text-center">
            Pie Chart With Customized Label Chart
          </h1>
          <PieChartWithCustomizedLabel
            chartHeight={chartHeight}
            data={data.pieChartWithCustomizedLabelData}
          />
        </div>
        <div className="mb-5">
          <h1 className="mb-5 text-xl font-semibold text-center">
            Straight Angle Pie Chart
          </h1>
          <StraightAnglePieChart
            chartHeight={chartHeight}
            data={data.straightAnglePieChartData}
          />
        </div>
        <div className="mb-5">
          <h1 className="mb-5 text-xl font-semibold text-center">
            Two Level Pie Chart
          </h1>
          <TwoLevelPieChart
            chartHeight={chartHeight}
            data1={data.twoLevelPieChartData1}
            data2={data.twoLevelPieChartData2}
          />
        </div>
        <div className="mb-5">
          <h1 className="mb-5 text-xl font-semibold text-center">
            Two Simple Pie Chart
          </h1>
          <TwoSimplePieChart
            chartHeight={chartHeight}
            data={data.twoSimplePieChart1Data}
          />
        </div>
        <div className="mb-5">
          <h1 className="mb-5 text-xl font-semibold text-center">
            Two Simple Pie Chart 2
          </h1>
          <TwoSimplePieChart2
            chartHeight={chartHeight}
            data={
              data.twoSimplePieChart2Data
            }
          />
        </div>
      </div>
    </div>
  );
}
