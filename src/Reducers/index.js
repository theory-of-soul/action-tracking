import {combineReducers} from 'redux';
import {createNavigationReducer} from 'react-navigation-redux-helpers';
import habits from './habits';
import AppNavigator from '../Navigation/appNavigator';

export default combineReducers({
  nav: createNavigationReducer(AppNavigator),
  habits,
});
