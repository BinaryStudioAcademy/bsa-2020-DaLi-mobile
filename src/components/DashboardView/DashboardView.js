import React from 'react';
import {Title} from 'react-native-paper';
import {View, FlatList} from 'react-native';
import * as visualizationHelper from '../../helpers/visualizationHelper';
import {
  VISUALIZATION_CONTAINER_WIDTH,
  VISUALIZATION_CONTAINER_HEIGHT,
} from '../../constants';
import styles from './styles';

const DashboardView = (props) => {
  const {dashboard, onRefresh, isFetching} = props;
  const viewWidth = VISUALIZATION_CONTAINER_WIDTH;
  const viewHeight = VISUALIZATION_CONTAINER_HEIGHT;

  const DashboardHeader = () => (
    <View style={styles.dashboardHeader}>
      <Title style={styles.dashboardHeaderTitle}>{dashboard.name}</Title>
    </View>
  );

  return (
    dashboard && (
      <View style={styles.visualizationContainer}>
        <FlatList
          data={dashboard.Visualizations}
          renderItem={({item}) => {
            return (
              <View style={styles.visualizationWrapper}>
                {visualizationHelper.getComponent(
                  item.type,
                  item.id,
                  item.data,
                  JSON.parse(item.config),
                  viewWidth,
                  viewHeight,
                )}
              </View>
            );
          }}
          ListHeaderComponent={DashboardHeader}
          keyExtractor={(visualization) =>
            `${dashboard.id} - ${visualization.id}`
          }
          onRefresh={onRefresh}
          refreshing={dashboard.Visualizations && isFetching}
        />
      </View>
    )
  );
};

export default DashboardView;
