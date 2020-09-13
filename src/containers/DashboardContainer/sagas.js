import {put, call, takeEvery, all, delay} from 'redux-saga/effects';
import {dashboardsApiService, dbTableApiService} from '../../services';
import {
  FETCH_DASHBOARD,
  FETCH_DASHBOARD_SUCCESS,
  FETCH_DASHBOARD_ERROR,
  RESET_DASHBOARD_NOTIFICATIONS,
} from './actionTypes';
import {NOTIFICATION_DURATION} from '../../constants';

export function* fetchDashboard({payload}) {
  try {
    const {id} = payload;
    const dashboard = yield call(dashboardsApiService.getDashboard, id);
    const arrayOfDataForVisualizations = yield all(
      dashboard.Visualizations.map((visualization) => {
        const datasetSettings = visualization.datasetSettings || [];
        return call(dbTableApiService.getTableData, visualization.tableId, {
          settings: datasetSettings,
          config: visualization.config,
        });
      }),
    );
    arrayOfDataForVisualizations.forEach((data, index) => {
      dashboard.Visualizations[index].data = data;
    });
    yield put({type: FETCH_DASHBOARD_SUCCESS, payload: {data: dashboard}});
  } catch (error) {
    yield put({
      type: FETCH_DASHBOARD_ERROR,
      payload: {error: error.message},
    });
    yield delay(NOTIFICATION_DURATION);
    yield put({type: RESET_DASHBOARD_NOTIFICATIONS});
  }
}

export function* watchFetchDashboard() {
  yield takeEvery(FETCH_DASHBOARD, fetchDashboard);
}

export default function* currentDashboardSaga() {
  yield all([watchFetchDashboard()]);
}
