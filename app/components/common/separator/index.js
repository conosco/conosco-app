import React from 'react';
import { View, Text } from 'react-native';

import style from './style';

const SeparatorOr = () => (
  <View style={style.content}>
    <View style={style.separator} />
    <Text style={style.or}>ou</Text>
    <View style={style.separator} />
  </View>
);

export default SeparatorOr;