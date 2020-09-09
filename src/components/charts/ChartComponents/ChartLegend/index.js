import React from 'react';
import {View} from 'react-native';
import {VictoryLegend} from 'victory-native';
import styles from './styles';

const ChartLegend = (props) => {
  const {colors, yAxis} = props;

  const labels = yAxis.map((axis) => ({name: axis}));

  return (
    <View style={styles.chartLegendContainer}>
      {labels.length > 1 ? (
        <VictoryLegend
          style={{
            labels: {fontSize: 12},
          }}
          orientation="horizontal"
          gutter={20}
          colorScale={colors}
          data={labels}
        />
      ) : null}
    </View>
  );
};

export default ChartLegend;
