import {createStackNavigator} from 'react-navigation';
import HabitTrackerTable from '../View/HabitTracker/HabitTrackerTable/HabitTrackerTable';
import HabitTrackerCreator from '../View/HabitTracker/HabitTrackerCreator/HabitTrackerCreator';

export const AppNavigator = createStackNavigator(
  {
    Create: HabitTrackerCreator,
    Table: HabitTrackerTable,
  },
  {
    initialRouteName: 'Create',
  },
);
