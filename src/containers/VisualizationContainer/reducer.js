import {
  FETCH_VISUALIZATION,
  FETCH_VISUALIZATION_ERROR,
  FETCH_VISUALIZATION_SUCCESS,
  RESET_VISUALIZATION_NOTIFICATIONS,
} from './actionTypes';

const initialState = {
  isLoading: false,
  error: null,
  success: null,
  data: null,
};

const currentVisualizationReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_VISUALIZATION: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case FETCH_VISUALIZATION_ERROR: {
      const {error} = payload;
      return {
        ...state,
        error,
        isLoading: false,
      };
    }

    case FETCH_VISUALIZATION_SUCCESS: {
      const {data} = payload;
      return {
        ...state,
        isLoading: false,
        data,
      };
    }

    case RESET_VISUALIZATION_NOTIFICATIONS: {
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

export default currentVisualizationReducer;
