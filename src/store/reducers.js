import {combineReducers} from 'redux';
import authReducer from '../containers/LoginContainer/reducer';
import dashboardsReducer from '../containers/DashboardsContainer/reducer';

export default combineReducers({
  currentUser: authReducer,
  dashboards: dashboardsReducer,
});
