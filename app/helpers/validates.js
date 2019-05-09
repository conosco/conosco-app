import { Alert } from 'react-native';

const showAlert = msg => {
  Alert.alert('Erro! :(', msg);
}

export const validateUser = user => {
  if (user.email === '') {
    showAlert('Email não deve estar vazio!');
    return false;
  }
  if (user.password === '') {
    showAlert('Senha não deve estar vazia!');
    return false;
  }
  return true;
}

export const validateRegister = user => {
  if (user.email === '') {
    showAlert('Email não deve estar vazio!');
    return false;
  }
  if (user.password === '') {
    showAlert('Senha não deve estar vazia!');
    return false;
  }
  if (user.picture === '') {
    showAlert('Deve selecionar uma foto!');
    return false;
  }
  if (user.firstName === '') {
    showAlert('Nome não deve estar vazio!');
    return false;
  }
  if (user.lastName === '') {
    showAlert('Sobrenome não deve estar vazio!');
    return false;
  }
  return true;
}