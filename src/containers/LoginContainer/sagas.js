import {put, call, takeEvery, all, delay} from 'redux-saga/effects';
import {storageService, authApiService} from '../../services';
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  RESET_AUTH_NOTIFICATIONS,
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  LOGOUT_USER,
  LOGOUT_USER_ERROR,
  LOGOUT_USER_SUCCESS,
} from './actionTypes';
import {NOTIFICATION_DURATION} from '../../constants';

export function* loginSaga({payload}) {
  try {
    const {loginCredentials} = payload;
    const response = yield call(authApiService.loginUser, loginCredentials);
    yield call(storageService.set, 'token', response.token);
    yield put({type: LOGIN_USER_SUCCESS, payload: {response}});
  } catch (error) {
    yield put({type: LOGIN_USER_ERROR, payload: {error: error.message}});
    yield delay(NOTIFICATION_DURATION);
    yield put({type: RESET_AUTH_NOTIFICATIONS});
  }
}

export function* watchLoginSaga() {
  yield takeEvery(LOGIN_USER, loginSaga);
}

export function* fetchUserSaga() {
  try {
    const response = yield call(authApiService.getCurrentUser);
    yield put({type: FETCH_USER_SUCCESS, payload: {response}});
  } catch (error) {
    yield put({type: FETCH_USER_ERROR, payload: {error: error.message}});
    yield delay(NOTIFICATION_DURATION);
    yield put({type: RESET_AUTH_NOTIFICATIONS});
  }
}

export function* watchFetchUserSaga() {
  yield takeEvery(FETCH_USER, fetchUserSaga);
}

export function* logoutUserSaga() {
  try {
    yield call(storageService.remove, 'token');
    yield put({type: LOGOUT_USER_SUCCESS});
  } catch (error) {
    yield put({type: LOGOUT_USER_ERROR, payload: {error: error}});
    yield delay(NOTIFICATION_DURATION);
    yield put({type: RESET_AUTH_NOTIFICATIONS});
  }
}

export function* watchLogoutUserSaga() {
  yield takeEvery(LOGOUT_USER, logoutUserSaga);
}

export default function* authSaga() {
  yield all([watchLoginSaga(), watchFetchUserSaga(), watchLogoutUserSaga()]);
}
