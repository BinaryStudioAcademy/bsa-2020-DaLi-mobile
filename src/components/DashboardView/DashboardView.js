import React from 'react';
import {View, RefreshControl, SafeAreaView, ScrollView} from 'react-native';
import DashboardVisualization from './DashboardVisualization';
import {EmptyScreen, Header} from '../shared';
import styles from './styles';

const DashboardView = (props) => {
  const {dashboard, onRefresh, isFetching} = props;

  return (
    dashboard && (
      <SafeAreaView>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={isFetching} onRefresh={onRefresh} />
          }>
          <Header name={dashboard?.name} description={dashboard?.description} />
          {!dashboard.Visualizations.length && (
            <EmptyScreen title={'Dashboard is empty'} />
          )}
          <View style={styles.dashboardVisualizationList}>
            {dashboard.Visualizations.map((item) => (
              <DashboardVisualization
                key={`${dashboard.id} - ${item.id}`}
                name={item.name}
                description={item.description}
                type={item.type}
                id={item.id}
                data={item.data}
                config={JSON.parse(item.config)}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  );
};

export default DashboardView;
