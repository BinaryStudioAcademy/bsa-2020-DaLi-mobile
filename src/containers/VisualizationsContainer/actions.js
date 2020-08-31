import {
  FETCH_VISUALIZATIONS,
  RESET_VISUALIZATIONS_NOTIFICATIONS,
} from './actionTypes';

export const fetchVisualizations = () => {
  return {
    type: FETCH_VISUALIZATIONS,
  };
};

export const resetVisualizationsNotifications = () => {
  return {
    type: RESET_VISUALIZATIONS_NOTIFICATIONS,
  };
};
