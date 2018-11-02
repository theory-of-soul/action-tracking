import React from 'react';
import {connect} from 'react-redux';
import {Button, Text} from 'native-base';

function CreateButton(props) {
  return (
    <Button full info onPress={props.onPress}>
      <Text style={{color: '#fff', fontSize: 16}}>Создать</Text>
    </Button>
  );
}

export default connect()(CreateButton);
