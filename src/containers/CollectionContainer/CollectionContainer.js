import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import {WithNotifications} from '../../hoc';
import {CollectionView} from '../../components';

const CollectionsViewWithNotifications = WithNotifications(CollectionView);

const DashboardsContainer = (props) => {
  const {
    isLoading,
    error,
    visualizations,
    dashboards,
    fetchCollection,
    resetCollectionNotifications,
    route,
    name,
    description,
  } = props;

  useEffect(() => {
    fetchCollection(route.params.id);
  }, [fetchCollection, route]);

  const onRefresh = () => fetchCollection(route.params.id);

  return (
    <CollectionsViewWithNotifications
      isLoading={isLoading}
      error={error}
      onDismiss={resetCollectionNotifications}
      visualizations={visualizations}
      dashboards={dashboards}
      name={name}
      description={description}
      refreshing={isLoading}
      onRefresh={onRefresh}
    />
  );
};

const mapStateToProps = ({currentCollection}) => ({
  isLoading: currentCollection.isLoading,
  error: currentCollection.error,
  visualizations: currentCollection.data?.visualizations || [],
  dashboards: currentCollection.data?.dashboards || [],
  name: currentCollection.data?.name,
  description: currentCollection.data?.description,
});

const mapDispatchToProps = {...actions};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardsContainer);
