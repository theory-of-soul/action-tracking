import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import ActionList from '../HabitTrackerCreator/ActionList';

import { Container, Content, Footer, FooterTab, Text} from 'native-base';


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
          <FooterTab>

          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default connect()(HabitTrackerTable)