import {
  FETCH_DASHBOARDS,
  FETCH_DASHBOARDS_SUCCESS,
  FETCH_DASHBOARDS_ERROR,
  RESET_DASHBOARDS_NOTIFICATIONS,
} from './actionTypes';

const initialState = {
  isLoading: false,
  error: null,
  success: null,
  data: [],
};

const dashboardsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_DASHBOARDS: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case FETCH_DASHBOARDS_ERROR: {
      const {error} = payload;
      return {
        ...state,
        error,
        isLoading: false,
      };
    }

    case FETCH_DASHBOARDS_SUCCESS: {
      const {data} = payload;
      return {
        ...state,
        isLoading: false,
        data,
      };
    }

    case RESET_DASHBOARDS_NOTIFICATIONS: {
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

export default dashboardsReducer;
