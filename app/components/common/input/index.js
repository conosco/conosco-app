import React from 'react';
import { TextInput } from 'react-native';

import style from './style';

const Input = ({ onChange, value, placeholder, autoFocus, autoCorrect, type, capitalize, secure }) => (
  <TextInput
    style={style.content}
    onChangeText={onChange}
    value={value}
    placeholder={placeholder}
    placeholderTextColor={'#82AABE'}
    autoFocus={autoFocus}
    autoCorrect={autoCorrect}
    keyboardType={type || 'default'}
    autoCapitalize={capitalize ? 'words' : 'none'}
    secureTextEntry={secure}
  />
);

export default Input;