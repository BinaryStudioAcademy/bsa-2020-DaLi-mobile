import {all} from 'redux-saga/effects';
import authSaga from '../containers/LoginContainer/sagas';
import dashboardsSaga from '../containers/DashboardsContainer/sagas';

export function* rootSaga() {
  yield all([authSaga(), dashboardsSaga()]);
}
