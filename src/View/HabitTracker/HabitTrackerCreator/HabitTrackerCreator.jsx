import React from 'react';
import {connect} from 'react-redux';
import {connect} from 'react-redux';

import {Container, Content, Footer, FooterTab} from 'native-base';
import AddNewAction from './AddNewAction';
import ActionList from './ActionList';
import CreateButton from './CreateButton';
import AddAmountDayTracking from './AddAmountDayTracking';

class HabitTrackerCreator extends React.Component {
  static navigationOptions = {
    title: 'Создание',
  };

  render() {
    return (
      <Container>
        <Content>
          <AddAmountDayTracking />
          <AddNewAction />
          <ActionList />
        </Content>
        <Footer>
          <FooterTab>
            <CreateButton
              onPress={() => {
                this.props.navigation.navigate('Table');
              }}
            />
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default connect()(HabitTrackerCreator);
