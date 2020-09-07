import * as React from 'react';
import {RefreshControl, SafeAreaView, ScrollView} from 'react-native';
import CollectionTabs from './CollectionTabs';
import {Header, EmptyScreen} from '../shared';

const CollectionView = (props) => {
  const {
    visualizations,
    dashboards,
    name,
    description,
    refreshing,
    onRefresh,
  } = props;
  return (
    !!visualizations && (
      <SafeAreaView>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <Header name={name} description={description} />
          {!visualizations.length && !dashboards.length ? (
            <EmptyScreen title={'Collection is empty'} />
          ) : (
            <CollectionTabs
              dashboards={dashboards}
              visualizations={visualizations}
            />
          )}
        </ScrollView>
      </SafeAreaView>
    )
  );
};

export default CollectionView;
