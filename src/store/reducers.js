import {combineReducers} from 'redux';
import authReducer from '../containers/LoginContainer/reducer';
import dashboardsReducer from '../containers/DashboardsContainer/reducer';
import visualizationsReducer from '../containers/VisualizationsContainer/reducer';
import currentVisualizationReducer from '../containers/VisualizationContainer/reducer';
import currentDashboardReducer from '../containers/DashboardContainer/reducer';

export default combineReducers({
  currentUser: authReducer,
  dashboards: dashboardsReducer,
  visualizations: visualizationsReducer,
  currentVisualization: currentVisualizationReducer,
  currentDashboard: currentDashboardReducer,
});
