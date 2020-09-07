import {
  FETCH_COLLECTION,
  FETCH_COLLECTION_SUCCESS,
  FETCH_COLLECTION_ERROR,
  RESET_COLLECTION_NOTIFICATIONS,
} from './actionTypes';

const initialState = {
  isLoading: false,
  error: null,
  data: null,
};

const currentCollectionReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_COLLECTION: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case FETCH_COLLECTION_ERROR: {
      const {error} = payload;
      return {
        ...state,
        isLoading: false,
        error,
      };
    }

    case FETCH_COLLECTION_SUCCESS: {
      const {data} = payload;
      return {
        ...state,
        isLoading: false,
        data,
      };
    }

    case RESET_COLLECTION_NOTIFICATIONS: {
      return {
        ...state,
        error: null,
      };
    }

    default:
      return state;
  }
};

export default currentCollectionReducer;
