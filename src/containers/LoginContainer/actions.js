import {
  LOGIN_USER,
  RESET_AUTH_NOTIFICATIONS,
  FETCH_USER,
  LOGOUT_USER,
} from './actionTypes';

export const loginUser = loginCredentials => {
  return {
    type: LOGIN_USER,
    payload: {loginCredentials},
  };
};

export const resetAuthNotifications = () => {
  return {
    type: RESET_AUTH_NOTIFICATIONS,
  };
};

export const fetchUser = () => {
  return {
    type: FETCH_USER,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};
