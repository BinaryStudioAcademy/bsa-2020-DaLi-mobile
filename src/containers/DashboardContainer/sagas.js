import {put, call, takeEvery, all, delay} from 'redux-saga/effects';
import {dashboardsApiService} from '../../services';
import {
  FETCH_DASHBOARD,
  FETCH_DASHBOARD_SUCCESS,
  FETCH_DASHBOARD_ERROR,
  RESET_DASHBOARD_NOTIFICATIONS,
} from './actionTypes';
import {NOTIFICATION_DURATION} from '../../constants';

export function* fetchDashboard({payload}) {
  try {
    const {id} = payload;
    const data = yield call(dashboardsApiService.getDashboard, id);
    yield put({type: FETCH_DASHBOARD_SUCCESS, payload: {data}});
  } catch (error) {
    yield put({
      type: FETCH_DASHBOARD_ERROR,
      payload: {error: error.message},
    });
    yield delay(NOTIFICATION_DURATION);
    yield put({type: RESET_DASHBOARD_NOTIFICATIONS});
  }
}

export function* watchFetchDashboard() {
  yield takeEvery(FETCH_DASHBOARD, fetchDashboard);
}

export default function* currentDashboardSaga() {
  yield all([watchFetchDashboard()]);
}
