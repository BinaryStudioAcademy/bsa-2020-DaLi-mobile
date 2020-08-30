import {combineReducers} from 'redux';
import authReducer from '../containers/LoginContainer/reducer';

export default combineReducers({currentUser: authReducer});
