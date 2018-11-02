import React, {Component} from 'react';

import {Provider, connect} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/Reducers/index';

import {AppNavigator} from "./src/Navigation/appNavigator";
import {createReactNavigationReduxMiddleware, reduxifyNavigator} from "react-navigation-redux-helpers";

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const AppWithNavigation = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({
  state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(AppWithNavigation);

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, middleware)
);

class App extends Component<{}> {
  render() {

    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default App;
