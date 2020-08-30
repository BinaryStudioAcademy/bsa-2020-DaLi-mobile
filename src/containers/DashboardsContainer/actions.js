import {FETCH_DASHBOARDS, RESET_DASHBOARDS_NOTIFICATIONS} from './actionTypes';

export const fetchDashboards = () => {
  return {
    type: FETCH_DASHBOARDS,
  };
};

export const resetDashboardsNotifications = () => {
  return {
    type: RESET_DASHBOARDS_NOTIFICATIONS,
  };
};
