import { Alert } from 'react-native';

import * as GroupAC from './actionCreators';
import groupApi from '../../api/groupApi';

export const loadGroups = (token) => (dispatch) => {
  groupApi.getGroups(token)
    .then((result) => {
      console.log("result = ", result.status);
      if (result.status === 200) {
        const groups = result.data;
        console.log("groups = ", groups);
        dispatch(GroupAC.fetchGroups(groups));
      }
    })
    .catch((error) => {
      console.log(error);
      Alert('Ocorreu um erro ao carregar os grupos!');
    });
};