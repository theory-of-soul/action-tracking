import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {Button, Input, Item, Label, Text} from 'native-base';
import {ApplicationState} from '../../../Reducers/ApplicationState';

class AddNewAction extends React.Component {
  render() {
    return (
      <View>
        <View style={{padding: 10, marginTop: 10}}>
          <Item floatingLabel>
            <Label>Какие действия будем отслеживать?</Label>
            <Input
              autoFocus
              style={{fontSize: 18}}
              onChangeText={text => {
                this.props.dispatch({type: 'CHANGE_ADD_ACTION_INPUT', text});
              }}
              value={this.props.inputValue}
            />
          </Item>
        </View>
        <View style={{padding: 10}}>
          <Button
            block
            success
            onPress={() => {
              if (this.props.inputValue.trim() !== '') {
                this.props.dispatch({type: 'ADD_ACTION', text: this.props.inputValue});
              }
            }}
          >
            <Text>Добавить</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => {
  return {
    inputValue: state.habits.get('addActionInputValue', ''),
  };
};

export default connect(mapStateToProps)(AddNewAction);
