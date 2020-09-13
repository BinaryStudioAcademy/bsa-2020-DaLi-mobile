import React from 'react';
import {View} from 'react-native';
import {VictoryLegend} from 'victory-native';
import styles from './styles';

const ChartLegend = (props) => {
  const {colors, yAxis} = props;

  const labels = yAxis.map((axis) => ({name: axis}));

  return labels.length > 1 ? (
    <View style={styles.chartLegendContainer}>
      <VictoryLegend
        style={{
          labels: {fontSize: 12},
        }}
        orientation="horizontal"
        gutter={20}
        colorScale={colors}
        data={labels}
      />
    </View>
  ) : null;
};

export default ChartLegend;
