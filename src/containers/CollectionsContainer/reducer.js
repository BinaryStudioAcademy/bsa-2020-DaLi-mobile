import {
  FETCH_COLLECTIONS,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_ERROR,
  RESET_COLLECTIONS_NOTIFICATIONS,
} from './actionTypes';

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

const collectionsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_COLLECTIONS: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case FETCH_COLLECTIONS_ERROR: {
      const {error} = payload;
      return {
        ...state,
        isLoading: false,
        error,
      };
    }

    case FETCH_COLLECTIONS_SUCCESS: {
      const {data} = payload;
      return {
        ...state,
        isLoading: false,
        data,
      };
    }

    case RESET_COLLECTIONS_NOTIFICATIONS: {
      return {
        ...state,
        error: null,
      };
    }

    default:
      return state;
  }
};

export default collectionsReducer;
