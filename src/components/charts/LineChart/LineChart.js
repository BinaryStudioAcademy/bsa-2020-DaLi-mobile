import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {
  VictoryChart,
  VictoryGroup,
  VictoryTheme,
  VictoryLine,
  VictoryAxis,
  VictoryLabel,
} from 'victory-native';
import {ChartLegend} from '../ChartComponents';
import * as ChartHelper from '../../../helpers/chartHelper';
import styles from './styles';

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
    const showValues = config.display.showDataPointsValues;
    return (
      <VictoryLine
        key={`${id} - ${index}`}
        data={lineData}
        domain={{y: yMinMax}}
        labels={({datum}) => (showValues ? datum.y : null)}
        labelComponent={
          <VictoryLabel style={styles.yAxisItemValue} renderInPortal dy={-10} />
        }
        interpolation={lineTypes[config.display.lineType[index]]}
      />
    );
  });
  return (
    <View>
      <ChartLegend yAxis={YAxis} colors={linesColors} />
      <View style={styles.chartWrapper}>
        {config.axisData.YAxis.displayLabel && (
          <View style={styles.yAxisLabelContainer}>
            <Text style={styles.yAxisLabelTitle}>
              {config.axisData.YAxis.label[0]}
            </Text>
          </View>
        )}
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
      {config.axisData.XAxis.displayLabel && (
        <View style={styles.yAxisLabelContainer}>
          <Text style={styles.xAxisLabelTitle}>
            {config.axisData.XAxis.label}
          </Text>
        </View>
      )}
    </View>
  );
};

export default LineChart;
