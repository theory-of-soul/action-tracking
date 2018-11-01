import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {ApplicationState} from "../../../Reducers/ApplicationState";

class AddNewAction extends React.Component {

  render() {
    return (
      <View>
        <TextInput
          autoFocus={true}
          placeholder="Какие действия будем отслеживать?"
          style={{margin: 10, padding: 10, backgroundColor: '#fff', fontSize: 18}}
          onChangeText={(text) => {
            this.props.dispatch({type: 'CHANGE_ADD_ACTION_INPUT', text: text})
          }}
          value={this.props.inputValue}
        />
        <TouchableOpacity
          style={{padding: 10, backgroundColor: '#ff44ff'}}
          onPress={() => {
            this.props.dispatch({type: 'ADD_ACTION', text: this.props.inputValue})
          }}
        >
          <Text style={{fontSize: 20, textAlign: 'center'}}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => {
  return ({
    inputValue: state.habits.get('addActionInputValue', '')
  })
};

export default connect(mapStateToProps)(AddNewAction)