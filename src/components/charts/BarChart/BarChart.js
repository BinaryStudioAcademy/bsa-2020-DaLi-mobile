import React from 'react';
import {ScrollView, View, Text} from 'react-native';
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
import styles from './styles';

const BarChart = (props) => {
  const {id, data, config, viewHeight} = props;

  const chartPadding = 50;
  const YAxis = config.axisData.YAxis.key;
  const XAxis = config.axisData.XAxis.key;
  const barsColors = config.display.color;
  const barWidth = 25;
  const barPadding = 25;
  const offset = config.display.stacked ? 0 : barWidth + barPadding;
  const barsCount = config.display.stacked ? 1 : YAxis.length;
  const chartWidth =
    data.length * (barWidth + barPadding) * barsCount + chartPadding * 2;

  const goalLineData = ChartHelper.createGoalLineData(
    data,
    config.display.goal.value,
  );

  const bars = YAxis.map((YAxisKey, index) => {
    const bardData = ChartHelper.createChartData(data, XAxis, YAxisKey);
    const yMinMax = ChartHelper.findYMinMax(bardData);
    return (
      <VictoryBar
        style={{data: {width: barWidth}}}
        key={`${id} - ${index}`}
        data={bardData}
        domainPadding={config.display.stacked ? barPadding : 0}
        domain={{y: yMinMax}}
      />
    );
  });

  return (
    <View>
      <ChartLegend yAxis={YAxis} colors={barsColors} />
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

export default BarChart;
