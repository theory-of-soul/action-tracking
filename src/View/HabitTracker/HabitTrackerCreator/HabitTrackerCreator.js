import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import AddNewAction from './AddNewAction';
import ActionList from './ActionList';
import CreateButton from './CreateButton';
import AddAmountDayTracking from './AddAmountDayTracking';

import { Container, Content, Footer, FooterTab} from 'native-base';

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
              <CreateButton onPress={() => {
                this.props.navigation.navigate('Table');
              }}/>
            </FooterTab>
          </Footer>
        </Container>
      );
    }
}

export default connect()(HabitTrackerCreator)