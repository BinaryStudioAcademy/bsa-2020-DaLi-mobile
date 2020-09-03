import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {visualizationHelper} from '../../helpers';

const VisualizationView = (props) => {
  const {id, type, data, config} = props;
  const [viewWidth, setViewWidth] = useState(0);
  const [viewHeight, setViewHeight] = useState(0);
  return (
    <View style={styles.visualizationContainer}>
      <View
        onLayout={(event) => {
          const {width, height} = event.nativeEvent.layout;
          setViewWidth(width);
          setViewHeight(height);
        }}
        style={styles.visualizationWrapper}>
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
