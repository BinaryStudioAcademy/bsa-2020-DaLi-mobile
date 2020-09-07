import React from 'react';
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryLabel,
} from 'victory-native';

const LineChart = (props) => {
  const {id, data, config, viewWidth, viewHeight} = props;
  const lineTypes = {
    curveNatural: 'natural',
    curveLinear: 'linear',
    curveStep: 'step',
  };
  const lines = [config.axisData.YAxis.key].map((YAxisKey, index) => {
    const showValues = config.display.showDataPointsValues ? YAxisKey : null;
    return (
      <VictoryLine
        key={`${id} - ${index}`}
        data={data}
        x={config.axisData.XAxis.key}
        y={YAxisKey}
        style={{
          data: {stroke: config.display.color},
        }}
        interpolation={lineTypes[config.display.lineType[index]]}
        labels={({datum}) => datum[showValues]}
        labelComponent={<VictoryLabel dy={-5} />}
      />
    );
  });
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      width={viewWidth}
      height={viewHeight}
      padding={45}>
      {lines}
    </VictoryChart>
  );
};

export default LineChart;
