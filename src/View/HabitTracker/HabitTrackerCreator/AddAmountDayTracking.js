import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {ApplicationState} from "../../../Reducers/ApplicationState";
import {Input, Item, Label} from 'native-base';

class AddAmountDayTracking extends React.Component {

  render() {
    return (
      <View style={{padding: 10, marginTop: 10}}>
        <Item floatingLabel>
          <Label>Сколько дней будем отслеживать?</Label>
          <Input
            type={'number'}
            autoFocus={true}
            style={{fontSize: 18}}
            onChangeText={(number) => {
              this.props.dispatch({type: 'CHANGE_AMOUNT_DAY_INPUT', amount: number})
            }}
            value={this.props.amountDay}
          />
        </Item>
      </View>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => {
  return ({
    amountDay: state.habits.get('amountDay')
  })
};

export default connect(mapStateToProps)(AddAmountDayTracking);