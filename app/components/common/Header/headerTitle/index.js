import React from 'react';
import { Text } from 'react-native';

import style from './style';

const HeaderTitle = ({ title }) => (
  <Text style={style.title}>{title}</Text>
);

export default HeaderTitle;
