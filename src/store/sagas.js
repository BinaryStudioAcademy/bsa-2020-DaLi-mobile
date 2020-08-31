import {all} from 'redux-saga/effects';
import authSaga from '../containers/LoginContainer/sagas';
import dashboardsSaga from '../containers/DashboardsContainer/sagas';
import visualizationsSaga from '../containers/VisualizationsContainer/sagas';
import currentVisualizationSaga from '../containers/VisualizationContainer/sagas';
import currentDashboardSaga from '../containers/DashboardContainer/sagas';

export function* rootSaga() {
  yield all([
    authSaga(),
    dashboardsSaga(),
    visualizationsSaga(),
    currentVisualizationSaga(),
    currentDashboardSaga(),
  ]);
}
