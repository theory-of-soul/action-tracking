import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import AddNewAction from './AddNewAction';
import ActionList from './ActionList';

type Props = {};

class HabitTrackerCreator extends Component<Props> {

  render() {
    return (
      <View>
        <AddNewAction />
        <ActionList />
      </View>
    );
  }
}

export default connect()(HabitTrackerCreator)