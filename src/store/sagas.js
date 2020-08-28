import {all} from 'redux-saga/effects';
import {exampleSaga} from '../containers/ExampleContainer/sagas';

export function* rootSaga() {
  yield all([exampleSaga()]);
}
