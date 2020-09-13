import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import {WithNotifications} from '../../hoc';
import {CollectionsView} from '../../components';

const CollectionsViewWithNotifications = WithNotifications(CollectionsView);

const DashboardsContainer = (props) => {
  const {
    isLoading,
    error,
    collections,
    fetchCollections,
    resetCollectionsNotifications,
  } = props;

  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);

  return (
    <CollectionsViewWithNotifications
      isLoading={isLoading}
      error={error}
      onDismiss={resetCollectionsNotifications}
      collections={collections}
      refreshing={isLoading}
      onRefresh={() => fetchCollections()}
    />
  );
};

const mapStateToProps = ({collections}) => ({
  isLoading: collections.isLoading,
  error: collections.error,
  collections: collections.data,
});

const mapDispatchToProps = {...actions};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardsContainer);
