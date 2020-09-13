import {combineReducers} from 'redux';
import authReducer from '../containers/LoginContainer/reducer';
import collectionsReducer from '../containers/CollectionsContainer/reducer';
import currentCollectionReducer from '../containers/CollectionContainer/reducer';
import currentVisualizationReducer from '../containers/VisualizationContainer/reducer';
import currentDashboardReducer from '../containers/DashboardContainer/reducer';

export default combineReducers({
  currentUser: authReducer,
  collections: collectionsReducer,
  currentCollection: currentCollectionReducer,
  currentVisualization: currentVisualizationReducer,
  currentDashboard: currentDashboardReducer,
});
