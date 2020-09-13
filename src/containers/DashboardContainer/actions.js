import {FETCH_DASHBOARD, RESET_DASHBOARD_NOTIFICATIONS} from './actionTypes';

export const fetchDashboard = (id) => {
  return {
    type: FETCH_DASHBOARD,
    payload: {id},
  };
};

export const resetDashboardNotifications = () => {
  return {
    type: RESET_DASHBOARD_NOTIFICATIONS,
  };
};
