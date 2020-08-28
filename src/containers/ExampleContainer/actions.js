import {EXAMPLE_ACTION_REQUEST} from './actionsTypes';

export const exampleActionRequest = (payload) => {
  return {
    type: EXAMPLE_ACTION_REQUEST,
    payload,
  };
};
