import {put, call, takeEvery, all, delay} from 'redux-saga/effects';
import {visualizationsApiService} from '../../services';
import {
  FETCH_VISUALIZATION,
  FETCH_VISUALIZATION_SUCCESS,
  FETCH_VISUALIZATION_ERROR,
  RESET_VISUALIZATION_NOTIFICATIONS,
} from './actionTypes';
import {NOTIFICATION_DURATION} from '../../constants';

export function* fetchVisualization({payload}) {
  try {
    const {id} = payload;
    const data = yield call(
      visualizationsApiService.getVisualizationWithData,
      id,
    );
    yield put({
      type: FETCH_VISUALIZATION_SUCCESS,
      payload: {data},
    });
  } catch (error) {
    yield put({
      type: FETCH_VISUALIZATION_ERROR,
      payload: {error: error.message},
    });
    yield delay(NOTIFICATION_DURATION);
    yield put({type: RESET_VISUALIZATION_NOTIFICATIONS});
  }
}

export function* watchFetchVisualization() {
  yield takeEvery(FETCH_VISUALIZATION, fetchVisualization);
}

export default function* currentVisualizationSaga() {
  yield all([watchFetchVisualization()]);
}
