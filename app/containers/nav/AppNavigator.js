import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from '../screens/Home';
import Register from '../screens/Register';

const routes = {
  Home:{
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Register,
};

const Navigator = createAppContainer(createStackNavigator(routes));
const router = Navigator.router;

const AppNavigator = () => (<Navigator />);

export { router };
export default AppNavigator;
