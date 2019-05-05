import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import AppNavigator from './nav/AppNavigator';

class AppContainer extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <AppNavigator />
      </View>
    );
  }
}

export default connect()(AppContainer);
