import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';

import style from './style';

const Button = ({ text, color, icon, press, border, textColor, borderColor, styleProps }) => (
  <TouchableOpacity onPress={press} style={[styleProps, style.shadow, style.content, { backgroundColor: color }, border ? { borderColor, borderWidth: 1 } : {}]}>
    { icon ? <Image source={icon} style={style.image} /> : null }
    <Text style={[style.text, { color: textColor }]}>{text}</Text>
  </TouchableOpacity>
);

export default Button;