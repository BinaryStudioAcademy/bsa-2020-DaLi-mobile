import {put, call, takeEvery, all, delay} from 'redux-saga/effects';
import {dashboardsApiService} from '../../services';
import {
  FETCH_DASHBOARDS,
  FETCH_DASHBOARDS_SUCCESS,
  FETCH_DASHBOARDS_ERROR,
  RESET_DASHBOARDS_NOTIFICATIONS,
} from './actionTypes';
import {NOTIFICATION_DURATION} from '../../constants';

export function* fetchDashboards() {
  try {
    const data = yield call(dashboardsApiService.getDashboards);
    yield put({type: FETCH_DASHBOARDS_SUCCESS, payload: {data}});
  } catch (error) {
    yield put({type: FETCH_DASHBOARDS_ERROR, payload: {error: error.message}});
    yield delay(NOTIFICATION_DURATION);
    yield put({type: RESET_DASHBOARDS_NOTIFICATIONS});
  }
}

export function* watchFetchDashboards() {
  yield takeEvery(FETCH_DASHBOARDS, fetchDashboards);
}

export default function* authSaga() {
  yield all([watchFetchDashboards()]);
}
