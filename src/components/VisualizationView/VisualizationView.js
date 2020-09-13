import React from 'react';
import {View, RefreshControl, SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';
import * as visualizationHelper from '../../helpers/visualizationHelper';
import {
  VISUALIZATION_CONTAINER_WIDTH,
  VISUALIZATION_CONTAINER_HEIGHT,
} from '../../constants';
import {Header} from '../shared';

const VisualizationView = (props) => {
  const {
    id,
    type,
    data,
    config,
    name,
    description,
    refreshing,
    onRefresh,
  } = props;
  const viewWidth = VISUALIZATION_CONTAINER_WIDTH;
  const viewHeight = VISUALIZATION_CONTAINER_HEIGHT;
  return (
    <SafeAreaView>
      <ScrollView
        style={styles.visualizationContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Header name={name} description={description} />
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default VisualizationView;
