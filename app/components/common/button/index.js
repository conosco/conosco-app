import React from 'react';
import { TouchableOpacity, Image, Text, ActivityIndicator } from 'react-native';

import style from './style';

const Button = ({ text, color, icon, onPress, border, textColor, borderColor, styleProps, loading }) => (
  <TouchableOpacity onPress={!loading ? onPress : () => {}} style={[styleProps, style.shadow, style.content, { backgroundColor: color }, border ? { borderColor, borderWidth: 1 } : {}]}>
    { icon ? <Image source={icon} style={style.image} /> : null }
    { loading ? <ActivityIndicator style={style.image} color={'white'} size="small" /> : null }
    <Text style={[style.text, { color: textColor }]}>{text}</Text>
  </TouchableOpacity>
);

export default Button;