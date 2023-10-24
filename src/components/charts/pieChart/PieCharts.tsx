import { Component } from 'react'
import TwoLevelPieChart from './TwoLevelPieChart'
import StraightAnglePieChart from './StraightAnglePieChart'
import CustomActiveShapePieChart from './CustomActiveShapePieChart'
import PieChartWithCustomizedLabel from './PieChartWithCustomizedLabel'
import TwoSimplePieChart from './TwoSimplePieChart'
import AreaCharts from '../areaChart/AreaCharts'
import BarCharts from '../barChart/BarCharts'
import LineCharts from '../lineChart/LineCharts'
import RadialBarCharts from '../radialBarChart/RadialBarCharts'
import TwoSimplePieChart2 from './TwoSimplePieChart2'

export default class PieCharts extends Component {
  chartHeight=350
  render() {
    return (
      <div>
         <AreaCharts chartHeight={this.chartHeight} />
        <BarCharts chartHeight={this.chartHeight} />
        <LineCharts chartHeight={this.chartHeight} />
        <RadialBarCharts chartHeight={this.chartHeight} />
        <CustomActiveShapePieChart chartHeight={this.chartHeight} />
        <PieChartWithCustomizedLabel chartHeight={this.chartHeight} />
        <StraightAnglePieChart chartHeight={this.chartHeight} />
        <TwoLevelPieChart chartHeight={this.chartHeight} />
        <TwoSimplePieChart chartHeight={this.chartHeight} />
        <TwoSimplePieChart2 chartHeight={this.chartHeight} />
      </div>
    )
  }
}
