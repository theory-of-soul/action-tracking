import React from 'react';
import {ListView} from 'react-native';
import {connect} from 'react-redux';
import type {ApplicationState} from "../../../Reducers/ApplicationState";
import {Button, List, ListItem, Icon, Text} from 'native-base';

class ActionList extends React.Component {

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    this.props.dispatch({type: 'REMOVE_ACTION', id: rowId})
  }

  render() {

    return (
      <List
        rightOpenValue={-75}
        dataSource={this.ds.cloneWithRows(this.props.actions)}
        renderRow={(data) => {
          return (
            <ListItem style={{padding: 20}}>
              <Text style={{fontSize: 16}}>{data.text}</Text>
            </ListItem>
          )
        }}
        renderRightHiddenRow={(data, secId, rowId, rowMap) =>
          <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
            <Icon active name="trash" />
          </Button>
        }
      />
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  actions: state.habits.get('actions', [])
});

export default connect(mapStateToProps)(ActionList)

