import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  RESET_AUTH_NOTIFICATIONS,
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_ERROR,
} from './actionTypes';

const initialState = {
  isLoading: false,
  isAuthorized: false,
  token: null,
  user: null,
  error: null,
};

const authReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case LOGIN_USER:
    case FETCH_USER:
    case LOGOUT_USER: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case LOGIN_USER_ERROR:
    case FETCH_USER_ERROR:
    case LOGOUT_USER_ERROR: {
      const {error} = payload;
      return {
        ...state,
        error,
        isLoading: false,
      };
    }

    case RESET_AUTH_NOTIFICATIONS: {
      return {
        ...state,
        error: null,
        success: null,
      };
    }

    case LOGIN_USER_SUCCESS: {
      const {response} = payload;
      return {
        ...state,
        isLoading: false,
        isAuthorized: true,
        token: response.token,
        user: response.user,
      };
    }

    case FETCH_USER_SUCCESS: {
      const {response} = payload;
      return {
        ...state,
        isLoading: false,
        isAuthorized: true,
        user: response.user,
      };
    }

    case LOGOUT_USER_SUCCESS: {
      return {
        isLoading: false,
        isAuthorized: false,
        token: null,
        user: null,
        error: null,
      };
    }

    default:
      return state;
  }
};

export default authReducer;
