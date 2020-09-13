import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import {WithNotifications} from '../../hoc';
import {VisualizationView} from '../../components';

const VisualizationViewWithNotifications = WithNotifications(VisualizationView);

const VisualizationContainer = (props) => {
  const {
    route,
    isLoading,
    error,
    success,
    visualization,
    fetchVisualization,
    resetVisualizationNotifications,
  } = props;

  useEffect(() => {
    fetchVisualization(route.params.id);
  }, [fetchVisualization, route.params.id]);

  const onRefresh = () => fetchVisualization(route.params.id);

  return (
    <VisualizationViewWithNotifications
      isLoading={isLoading}
      error={error}
      success={success}
      onDismiss={resetVisualizationNotifications}
      id={visualization?.id}
      name={visualization?.name}
      type={visualization?.type}
      config={visualization?.config}
      data={visualization?.data}
      description={visualization?.description}
      refreshing={isLoading}
      onRefresh={onRefresh}
    />
  );
};

const mapStateToProps = ({currentVisualization}) => ({
  isLoading: currentVisualization.isLoading,
  error: currentVisualization.error,
  success: currentVisualization.success,
  visualization: currentVisualization.data,
});

const mapDispatchToProps = {...actions};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisualizationContainer);
