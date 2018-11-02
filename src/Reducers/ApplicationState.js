import * as Immutable from 'immutable';
import {Reducer} from 'redux';
import {ReducerState} from 'react-navigation-redux-helpers';

export type ApplicationState = {
  habits: Immutable.Map,
  nav: Reducer<ReducerState>,
};
