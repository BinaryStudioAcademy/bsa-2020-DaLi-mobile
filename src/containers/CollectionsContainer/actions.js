import {
  FETCH_COLLECTIONS,
  RESET_COLLECTIONS_NOTIFICATIONS,
} from './actionTypes';

export const fetchCollections = () => {
  return {
    type: FETCH_COLLECTIONS,
  };
};

export const resetCollectionsNotifications = () => {
  return {
    type: RESET_COLLECTIONS_NOTIFICATIONS,
  };
};
