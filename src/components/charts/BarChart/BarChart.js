import React from 'react';
import {ScrollView, View} from 'react-native';
import {
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryTheme,
  VictoryLine,
  VictoryAxis,
} from 'victory-native';
import {ChartLegend} from '../ChartComponents';
import * as ChartHelper from '../../../helpers/chartHelper';

const BarChart = (props) => {
  const {id, data, config, viewHeight} = props;

  const chartPadding = 50;
  const YAxis = config.axisData.YAxis.key;
  const XAxis = config.axisData.XAxis.key;
  const barsColors = config.display.color;
  const barWidth = 25;
  const barPadding = 25;
  const offset = barWidth + barPadding;
  const chartWidth =
    data.length * (barWidth + barPadding) * YAxis.length + chartPadding * 2;

  const goalLineData = ChartHelper.createGoalLineData(
    data,
    config.display.goal.value,
  );

  const bars = YAxis.map((YAxisKey, index) => {
    const bardData = ChartHelper.createBarData(data, XAxis, YAxisKey);

    return (
      <VictoryBar
        style={{data: {width: barWidth}}}
        key={`${id} - ${index}`}
        data={bardData}
      />
    );
  });

  return (
    <View>
      <ChartLegend yAxis={YAxis} colors={barsColors} />
      <ScrollView horizontal={true}>
        <VictoryChart
          theme={VictoryTheme.material}
          width={chartWidth}
          height={viewHeight}
          padding={chartPadding}>
          <VictoryGroup
            padding={barPadding}
            offset={offset}
            colorScale={barsColors}>
            {bars}
          </VictoryGroup>

          {config.display.goal.display && (
            <VictoryLine
              style={{data: {stroke: 'grey', strokeDasharray: [5, 5]}}}
              data={goalLineData}
            />
          )}

          <VictoryAxis dependentAxis style={{grid: {stroke: 'none'}}} />
          <VictoryAxis
            style={{
              grid: {stroke: 'none'},
              tickLabels: {fontSize: 7, fontWeight: 'bold', angle: -20},
            }}
          />
        </VictoryChart>
      </ScrollView>
    </View>
  );
};

export default BarChart;
