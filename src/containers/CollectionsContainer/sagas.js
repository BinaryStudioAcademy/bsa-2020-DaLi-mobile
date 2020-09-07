import {put, call, takeEvery, all} from 'redux-saga/effects';
import {
  FETCH_COLLECTIONS,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_ERROR,
} from './actionTypes';
import {collectionsApiService} from '../../services';

export function* fetchCollections() {
  try {
    const {collections} = yield call(collectionsApiService.getCollections);
    yield put({type: FETCH_COLLECTIONS_SUCCESS, payload: {data: collections}});
  } catch (error) {
    yield put({type: FETCH_COLLECTIONS_ERROR, payload: {error: error.message}});
  }
}

export function* watchFetchCollectionsSaga() {
  yield takeEvery(FETCH_COLLECTIONS, fetchCollections);
}

export default function* collectionsSaga() {
  yield all([watchFetchCollectionsSaga()]);
}
