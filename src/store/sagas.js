import {all} from 'redux-saga/effects';
import authSaga from '../containers/LoginContainer/sagas';
import collectionsSaga from '../containers/CollectionsContainer/sagas';
import currentCollectionSaga from '../containers/CollectionContainer/sagas';
import currentVisualizationSaga from '../containers/VisualizationContainer/sagas';
import currentDashboardSaga from '../containers/DashboardContainer/sagas';

export function* rootSaga() {
  yield all([
    authSaga(),
    collectionsSaga(),
    currentCollectionSaga(),
    currentVisualizationSaga(),
    currentDashboardSaga(),
  ]);
}
