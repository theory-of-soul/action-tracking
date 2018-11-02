import {combineReducers} from 'redux';
import {habits} from './habits';
import {AppNavigator} from '../Navigation/appNavigator';
import {createNavigationReducer} from 'react-navigation-redux-helpers';

export default combineReducers({
  nav: createNavigationReducer(AppNavigator),
  habits,
});
