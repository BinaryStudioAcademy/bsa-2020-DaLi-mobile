import {put, call, takeEvery, all, delay} from 'redux-saga/effects';
import {
  FETCH_COLLECTIONS,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_ERROR,
  RESET_COLLECTIONS_NOTIFICATIONS,
} from './actionTypes';
import {collectionsApiService} from '../../services';
import {NOTIFICATION_DURATION} from '../../constants';

export function* fetchCollections() {
  try {
    const {collections} = yield call(collectionsApiService.getCollections);
    yield put({type: FETCH_COLLECTIONS_SUCCESS, payload: {data: collections}});
  } catch (error) {
    yield put({type: FETCH_COLLECTIONS_ERROR, payload: {error: error.message}});
    yield delay(NOTIFICATION_DURATION);
    yield put({type: RESET_COLLECTIONS_NOTIFICATIONS});
  }
}

export function* watchFetchCollectionsSaga() {
  yield takeEvery(FETCH_COLLECTIONS, fetchCollections);
}

export default function* collectionsSaga() {
  yield all([watchFetchCollectionsSaga()]);
}
