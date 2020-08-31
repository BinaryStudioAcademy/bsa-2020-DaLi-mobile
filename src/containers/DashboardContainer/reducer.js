import {
  FETCH_DASHBOARD,
  FETCH_DASHBOARD_ERROR,
  FETCH_DASHBOARD_SUCCESS,
  RESET_DASHBOARD_NOTIFICATIONS,
} from './actionTypes';

const initialState = {
  isLoading: false,
  error: null,
  success: null,
  data: null,
};

const currentDashboardReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_DASHBOARD: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case FETCH_DASHBOARD_ERROR: {
      const {error} = payload;
      return {
        ...state,
        error,
        isLoading: false,
      };
    }

    case FETCH_DASHBOARD_SUCCESS: {
      const {data} = payload;
      return {
        ...state,
        isLoading: false,
        data,
      };
    }

    case RESET_DASHBOARD_NOTIFICATIONS: {
      return {
        ...state,
        error: null,
        success: null,
      };
    }

    default:
      return state;
  }
};

export default currentDashboardReducer;
