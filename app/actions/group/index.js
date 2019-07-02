import { Alert } from 'react-native';

import * as GroupAC from './actionCreators';
import groupApi from '../../api/groupApi';

export const loadGroups = (token) => (dispatch) => {
  groupApi.getGroups(token)
    .then((result) => {
      if (result.status === 200) {
        const groups = result.data;
        dispatch(GroupAC.fetchGroups(groups));
      }
    })
    .catch((error) => {
      console.log(error);
      Alert('Ocorreu um erro ao carregar os grupos!');
    });
};

export const createGroup = (group, navigation) => () => {
  const thenCallback = (result) => {
    if (result.status === 201) {
      Alert.alert('Grupo criado com sucesso!');
      navigation.navigate('Dashboard');
    }
    else {
      alert('Não foi possível criar o grupo!');
      console.log('create group error: ', error);
    }
  };

  groupApi.createGroup(group)
    .then(thenCallback)
};