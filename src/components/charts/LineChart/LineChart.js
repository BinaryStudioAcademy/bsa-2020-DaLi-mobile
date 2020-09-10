import React from 'react';
import {ScrollView, View} from 'react-native';
import {
  VictoryChart,
  VictoryGroup,
  VictoryTheme,
  VictoryLine,
  VictoryAxis,
} from 'victory-native';
import {ChartLegend} from '../ChartComponents';
import * as ChartHelper from '../../../helpers/chartHelper';

const LineChart = (props) => {
  const {id, data, config, viewHeight} = props;
  const lineTypes = {
    curveNatural: 'natural',
    curveLinear: 'linear',
    curveStep: 'step',
  };

  const chartPadding = 50;
  const YAxis = config.axisData.YAxis.key;
  const XAxis = config.axisData.XAxis.key;
  const linesColors = config.display.color;
  const lineWidth = 50;
  const chartWidth = data.length * lineWidth;

  const goalLineData = ChartHelper.createGoalLineData(
    data,
    config.display.goal.value,
  );
  const lines = config.axisData.YAxis.key.map((YAxisKey, index) => {
    const lineData = ChartHelper.createChartData(data, XAxis, YAxisKey);
    const yMinMax = ChartHelper.findYMinMax(lineData);
    return (
      <VictoryLine
        key={`${id} - ${index}`}
        data={lineData}
        domain={{y: yMinMax}}
        interpolation={lineTypes[config.display.lineType[index]]}
      />
    );
  });
  return (
    <View>
      <ChartLegend yAxis={YAxis} colors={linesColors} />
      <ScrollView horizontal={true}>
        <VictoryChart
          theme={VictoryTheme.material}
          width={chartWidth}
          height={viewHeight}
          padding={chartPadding}>
          <VictoryGroup colorScale={linesColors}>{lines}</VictoryGroup>

          {config.display.goal.display && (
            <VictoryLine
              style={{data: {stroke: 'grey', strokeDasharray: [5, 5]}}}
              data={goalLineData}
            />
          )}
          <VictoryAxis dependentAxis style={{grid: {stroke: 'none'}}} />
          <VictoryAxis
            fixLabelOverlap
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

export default LineChart;
