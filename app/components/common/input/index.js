import React from 'react';
import { TextInput } from 'react-native';

import style from './style';

const Input = ({ onChange, value, placeholder }) => (
  <TextInput
    style={style.content}
    onChangeText={onChange}
    value={value}
    placeholder={placeholder}
    placeholderTextColor={'#82AABE'}
  />
);

export default Input;