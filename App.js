import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, SafeAreaView} from 'react-native';
import HabitTrackerCreator from './src/View/HabitTracker/HabitTrackerCreator/HabitTrackerCreator'

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './src/Reducers/index';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

type Props = {};
class App extends Component<Props> {
  render() {

    return (
      <Provider store={store}>
        <SafeAreaView style={{flexDirection: 'column'}}>
          <View style={{flex: 0,  alignSelf: 'stretch', backgroundColor: '#eee'}}>
            <HabitTrackerCreator />
          </View>
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;
