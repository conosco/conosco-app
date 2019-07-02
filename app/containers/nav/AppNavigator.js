import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from '../screens/Home';
import Register from '../screens/Register';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import NewGroup from '../screens/NewGroup';
import NewHabit from '../screens/NewHabit';

const headerStyle = {
  backgroundColor: '#4D9BA3',
  borderBottomWidth: 0,
};

const routes = {
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
      headerStyle,
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      headerStyle,
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerStyle,
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      header: null,
      headerStyle,
    }
  },
  NewGroup: {
    screen: NewGroup,
    navigationOptions: {
      headerStyle,
    }
  },
  NewHabit: {
    screen: NewHabit,
    navigationOptions: {
      headerStyle,
    }
  }
};

const Navigator = createAppContainer(createStackNavigator(routes));
const router = Navigator.router;

const AppNavigator = () => (<Navigator />);

export { router };
export default AppNavigator;
