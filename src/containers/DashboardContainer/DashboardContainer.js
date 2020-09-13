import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import {WithNotifications} from '../../hoc';
import {DashboardView} from '../../components';

const DashboardViewWithNotifications = WithNotifications(DashboardView);

const DashboardContainer = (props) => {
  const {
    route,
    isLoading,
    error,
    success,
    data,
    fetchDashboard,
    resetVisualizationNotifications,
  } = props;

  useEffect(() => {
    fetchDashboard(route.params.id);
  }, [fetchDashboard, route.params.id]);

  const onRefresh = () => fetchDashboard(route.params.id);

  return (
    <DashboardViewWithNotifications
      isLoading={isLoading}
      error={error}
      success={success}
      onDismiss={resetVisualizationNotifications}
      dashboard={data}
      onRefresh={onRefresh}
      isFetching={isLoading}
    />
  );
};

const mapStateToProps = ({currentDashboard}) => ({
  isLoading: currentDashboard.isLoading,
  error: currentDashboard.error,
  success: currentDashboard.success,
  data: currentDashboard.data,
});

const mapDispatchToProps = {...actions};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
