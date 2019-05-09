import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import style from './style';

const back = require('../../../../../assets/img/back.png');

const HeaderBackButton = ({ tintColor, onPress }) => (
  <TouchableOpacity onPress={onPress} style={style.bt}>
    <Image source={back} style={[style.img, { tintColor }]} />
  </TouchableOpacity>
);

export default HeaderBackButton;
