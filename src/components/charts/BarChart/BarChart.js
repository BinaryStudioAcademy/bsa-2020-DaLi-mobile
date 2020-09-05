import React from 'react';
import * as d3 from 'd3';
import {
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryTheme,
  VictoryLabel,
} from 'victory-native';
import {
  compareValues,
  calcMinYDataValue,
  calcMaxYDataValue,
} from '../../../helpers/utils';

const BarChart = (props) => {
  const {id, data, config, viewWidth, viewHeight} = props;
  const sortedData = data.sort(compareValues(config.axisData.XAxis.key));

  const YAxis = [config.axisData.YAxis.key];

  const bars = YAxis.map((YAxisKey, index) => {
    const xDataRange = {
      min: sortedData[0][config.axisData.XAxis.key],
      max: sortedData[data.length - 1][config.axisData.XAxis.key],
    };
    const yDataRange = {
      min: calcMinYDataValue(
        d3.min(data, (d) => d[YAxisKey]),
        config.display.goal,
      ),
      max: calcMaxYDataValue(
        d3.max(data, (d) => d[YAxisKey]),
        config.display.goal,
      ),
    };

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d[config.axisData.XAxis.key]))
      .range([xDataRange.min, xDataRange.max])
      .padding(0.1);

    const showValues = config.display.showDataPointsValues ? YAxisKey : null;

    return (
      <VictoryBar
        key={`${id} - ${index}`}
        data={data}
        x={xScale}
        y={YAxisKey}
        domain={{
          y: [yDataRange.min, yDataRange.max],
        }}
        labels={({datum}) => datum[showValues]}
        labelComponent={<VictoryLabel dy={-5} />}
      />
    );
  });

  return (
    <VictoryChart
      theme={VictoryTheme.material}
      width={viewWidth}
      height={viewHeight}>
      <VictoryGroup offset={5} colorScale={[config.display.color]}>
        {bars}
      </VictoryGroup>
    </VictoryChart>
  );
};

export default BarChart;
