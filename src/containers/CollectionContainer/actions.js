import {FETCH_COLLECTION, RESET_COLLECTION_NOTIFICATIONS} from './actionTypes';

export const fetchCollection = (id) => {
  return {
    type: FETCH_COLLECTION,
    payload: {id},
  };
};

export const resetCollectionNotifications = () => {
  return {
    type: RESET_COLLECTION_NOTIFICATIONS,
  };
};
