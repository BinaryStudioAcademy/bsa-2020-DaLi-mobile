import {FETCH_COLLECTION} from './actionTypes';

export const fetchCollection = (id) => {
  return {
    type: FETCH_COLLECTION,
    payload: {id},
  };
};
