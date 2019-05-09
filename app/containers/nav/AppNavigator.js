import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Home from '../screens/Home';
import Register from '../screens/Register';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';

const navigationIcon = (iconFocused, iconDefault) =>
  ({ focused }) => // eslint-disable-line
    <Image
      source={focused ? iconFocused : iconDefault}
      style={{ width: 20, height: 20, tintColor: 'black' }}
    />;

const back = require('../../../assets/img/back.png');

const headerStyle = {
  backgroundColor: '#4D9BA3',
  borderBottomWidth: 0,
};

const tab = {
  Dashboard: {
    screen: Dashboard,
    path: 'dashboard',
    navigationOptions: {
      tabBarIcon: navigationIcon(back, back),
    },
  },
};

const config = {
  navigationOptions: () => ({
    tabBarOnPress: ({ navigation, defaultHandler }) => {
      const { isFocused, state } = navigation;
      if (isFocused()) {
        if (state.key === 'Dashboard') {
          state.params.scrollToTop();
        }
      } else {
        defaultHandler();
      }
    },
    header: null,
    headerStyle,
    gesturesEnabled: false,
  }),
  tabBarOptions: {
    activeTintColor: 'rgb(79, 133, 134)',
    inactiveTintColor: '#82AABE',
    showIcon: true,
    labelStyle: {
      fontWeight: 'bold',
    },
  },
};

const tabScreens = createBottomTabNavigator(tab, config);

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
  tabScreens,
};

const Navigator = createAppContainer(createStackNavigator(routes));
const router = Navigator.router;

const AppNavigator = () => (<Navigator />);

export { router };
export default AppNavigator;
