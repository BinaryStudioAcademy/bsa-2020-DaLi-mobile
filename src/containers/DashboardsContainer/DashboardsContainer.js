import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import {WithNotifications} from '../../hoc';
import {DashboardsView} from '../../components';

const DashboardsViewWithNotifications = WithNotifications(DashboardsView);

const DashboardsContainer = props => {
  const {
    isLoading,
    error,
    success,
    data,
    fetchDashboards,
    resetDashboardsNotifications,
  } = props;

  useEffect(() => {
    fetchDashboards();
  }, [fetchDashboards]);

  return (
    <DashboardsViewWithNotifications
      isLoading={isLoading}
      error={error}
      success={success}
      onDismiss={resetDashboardsNotifications}
      dashboards={data}
    />
  );
};

const mapStateToProps = ({dashboards}) => ({
  isLoading: dashboards.isLoading,
  error: dashboards.error,
  success: dashboards.success,
  data: dashboards.data,
});

const mapDispatchToProps = {...actions};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardsContainer);
