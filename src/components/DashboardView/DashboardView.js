import React from 'react';
import {View, FlatList} from 'react-native';
import DashboardHeader from './DashboardHeader';
import DashboardVisualization from './DashboardVisualization';
import styles from './styles';

const DashboardView = (props) => {
  const {dashboard, onRefresh, isFetching} = props;
  const header = (
    <DashboardHeader
      dashboardName={dashboard?.name}
      dashboardDescription={dashboard?.description}
    />
  );

  return (
    dashboard && (
      <View style={styles.dashboardVisualizationList}>
        <FlatList
          data={dashboard.Visualizations}
          renderItem={({item}) => {
            return (
              <DashboardVisualization
                name={item.name}
                description={item.description}
                type={item.type}
                id={item.id}
                data={item.data}
                config={JSON.parse(item.config)}
              />
            );
          }}
          ListHeaderComponent={header}
          keyExtractor={(visualization) =>
            `${dashboard.id} - ${visualization.id}`
          }
          onRefresh={onRefresh}
          refreshing={isFetching}
        />
      </View>
    )
  );
};

export default DashboardView;
