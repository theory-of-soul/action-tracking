import React from 'react';
import {View, TextInput, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import type {ApplicationState} from "../../../Reducers/ApplicationState";

function ActionList(props) {

  console.log('ActionList', props);

  return (
    <ScrollView>
      {
        props.actions.map((action, index) => {
          return (
            <View key={index}>
              <Text>{action.text}</Text>
            </View>
          )
        })
      }
    </ScrollView>
  );
}

const mapStateToProps = (state: ApplicationState) => ({
  actions: state.habits.get('actions', [])
});

export default connect(mapStateToProps)(ActionList)

