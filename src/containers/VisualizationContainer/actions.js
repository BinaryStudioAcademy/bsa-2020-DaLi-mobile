import {
  FETCH_VISUALIZATION,
  RESET_VISUALIZATION_NOTIFICATIONS,
} from './actionTypes';

export const fetchVisualization = (id) => {
  return {
    type: FETCH_VISUALIZATION,
    payload: {id},
  };
};

export const resetVisualizationNotifications = () => {
  return {
    type: RESET_VISUALIZATION_NOTIFICATIONS,
  };
};
