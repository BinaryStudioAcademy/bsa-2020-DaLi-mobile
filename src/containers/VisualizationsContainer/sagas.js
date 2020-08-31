import {put, call, takeEvery, all, delay} from 'redux-saga/effects';
import {visualizationsApiService} from '../../services';
import {
  FETCH_VISUALIZATIONS,
  FETCH_VISUALIZATIONS_SUCCESS,
  FETCH_VISUALIZATIONS_ERROR,
  RESET_VISUALIZATIONS_NOTIFICATIONS,
} from './actionTypes';
import {NOTIFICATION_DURATION} from '../../constants';

export function* fetchVisualizations() {
  try {
    const data = yield call(visualizationsApiService.getVisualizations);
    yield put({type: FETCH_VISUALIZATIONS_SUCCESS, payload: {data}});
  } catch (error) {
    yield put({
      type: FETCH_VISUALIZATIONS_ERROR,
      payload: {error: error.message},
    });
    yield delay(NOTIFICATION_DURATION);
    yield put({type: RESET_VISUALIZATIONS_NOTIFICATIONS});
  }
}

export function* watchFetchVisualizations() {
  yield takeEvery(FETCH_VISUALIZATIONS, fetchVisualizations);
}

export default function* visualizationsSaga() {
  yield all([watchFetchVisualizations()]);
}
