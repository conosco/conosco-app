import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import style from './style';

const Loading = () => (
  <View style={style.container}>
    <ActivityIndicator color={'white'} size="large" />
  </View>
);

export default Loading;