import {all} from 'redux-saga/effects';
import authSaga from '../containers/LoginContainer/sagas';

export function* rootSaga() {
  yield all([authSaga()]);
}
