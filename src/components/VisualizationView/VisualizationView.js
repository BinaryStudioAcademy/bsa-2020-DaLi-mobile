import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import * as visualizationHelper from '../../helpers/visualizationHelper';
import {
  VISUALIZATION_CONTAINER_WIDTH,
  VISUALIZATION_CONTAINER_HEIGHT,
} from '../../constants';

const VisualizationView = (props) => {
  const {id, type, data, config} = props;
  const viewWidth = VISUALIZATION_CONTAINER_WIDTH;
  const viewHeight = VISUALIZATION_CONTAINER_HEIGHT;
  return (
    <View style={styles.visualizationContainer}>
      <View style={styles.visualizationWrapper}>
        {visualizationHelper.getComponent(
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

export default VisualizationView;
