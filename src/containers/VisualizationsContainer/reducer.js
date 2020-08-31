import {
  FETCH_VISUALIZATIONS,
  FETCH_VISUALIZATIONS_ERROR,
  FETCH_VISUALIZATIONS_SUCCESS,
  RESET_VISUALIZATIONS_NOTIFICATIONS,
} from './actionTypes';

const initialState = {
  isLoading: false,
  error: null,
  success: null,
  data: [],
};

const visualizationsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_VISUALIZATIONS: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case FETCH_VISUALIZATIONS_ERROR: {
      const {error} = payload;
      return {
        ...state,
        error,
        isLoading: false,
      };
    }

    case FETCH_VISUALIZATIONS_SUCCESS: {
      const {data} = payload;
      return {
        ...state,
        isLoading: false,
        data,
      };
    }

    case RESET_VISUALIZATIONS_NOTIFICATIONS: {
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

export default visualizationsReducer;
