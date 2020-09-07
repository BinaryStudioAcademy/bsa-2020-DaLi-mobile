import React from 'react';
import {Title, Subheading} from 'react-native-paper';
import {View} from 'react-native';
import * as visualizationHelper from '../../helpers/visualizationHelper';
import {
  DASHBOARD_VISUALIZATION_HEIGHT,
  DASHBOARD_VISUALIZATION_WIDTH,
} from '../../constants';

import styles from './styles';

const DashboardVisualization = (props) => {
  const {name, description, type, id, data, config} = props;
  const viewWidth = DASHBOARD_VISUALIZATION_WIDTH;
  const viewHeight = DASHBOARD_VISUALIZATION_HEIGHT;

  return (
    <View style={styles.dashboardVisualizationContainer}>
      <View style={styles.dashboardVisualizationHeader}>
        <Title style={styles.dashboardVisualizationName}>{name}</Title>
        {!!description.length && (
          <Subheading style={styles.dashboardVisualizationNameDescription}>
            {description}
          </Subheading>
        )}
      </View>
      <View style={styles.dashboardVisualization}>
        {visualizationHelper.getDashboardComponent(
          type,
          id,
          data,
          config,
          viewWidth,
          viewHeight,
        )}
      </View>
    </View>
  );
};

export default DashboardVisualization;
