import {put, call, takeEvery, all} from 'redux-saga/effects';
import {
  FETCH_COLLECTION,
  FETCH_COLLECTION_ERROR,
  FETCH_COLLECTION_SUCCESS,
} from './actionTypes';
import {collectionsApiService} from '../../services';

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
    console.log('error');
    yield put({type: FETCH_COLLECTION_ERROR, payload: {error: error.message}});
  }
}

export function* watchFetchCollectionSaga() {
  yield takeEvery(FETCH_COLLECTION, fetchCollectionSaga);
}

export default function* currentCollectionSaga() {
  yield all([watchFetchCollectionSaga()]);
}
