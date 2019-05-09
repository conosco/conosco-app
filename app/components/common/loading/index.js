import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import style from './style';

const Loading = () => (
  <View style={[style.container, style.centered]}>
    <View style={[style.centered, style.square]}>
      <ActivityIndicator color={'white'} size="large" />
    </View>
  </View>
);

export default Loading;