import React from 'react';
import {connect} from 'react-redux';
import {Container, Content, Footer, FooterTab, Text} from 'native-base';
import ActionList from '../HabitTrackerCreator/ActionList';

class HabitTrackerTable extends React.Component {
  static navigationOptions = {
    title: 'Трэкер',
  };

  render() {
    return (
      <Container>
        <Content>
          <Text>Тут будет список и таблица</Text>
          <ActionList />
        </Content>
        <Footer>
          <FooterTab />
        </Footer>
      </Container>
    );
  }
}

export default connect()(HabitTrackerTable);
