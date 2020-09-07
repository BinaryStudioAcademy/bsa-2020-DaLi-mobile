import {put, call, takeEvery, all, delay} from 'redux-saga/effects';
import {
  FETCH_COLLECTION,
  FETCH_COLLECTION_ERROR,
  FETCH_COLLECTION_SUCCESS,
  RESET_COLLECTION_NOTIFICATIONS,
} from './actionTypes';
import {collectionsApiService} from '../../services';
import {NOTIFICATION_DURATION} from '../../constants';

export function* fetchCollectionSaga({payload}) {
  try {
    const {id} = payload;
    const {dashboards, visualizations, ...collection} = yield call(
      collectionsApiService.getCollection,
      id,
    );
    const data = {dashboards, visualizations, ...collection};
    yield put({type: FETCH_COLLECTION_SUCCESS, payload: {data}});
  } catch (error) {
    yield put({type: FETCH_COLLECTION_ERROR, payload: {error: error.message}});
    yield delay(NOTIFICATION_DURATION);
    yield put({type: RESET_COLLECTION_NOTIFICATIONS});
  }
}

export function* watchFetchCollectionSaga() {
  yield takeEvery(FETCH_COLLECTION, fetchCollectionSaga);
}

export default function* currentCollectionSaga() {
  yield all([watchFetchCollectionSaga()]);
}
