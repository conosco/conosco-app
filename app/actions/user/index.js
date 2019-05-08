import { Alert } from 'react-native';
import { Facebook } from 'expo';
import toCamelCase from '../../helpers/toCamelCase';

import * as UserAC from './actionCreators';

export const logIn = () => (dispatch) => {
  Facebook.logInWithReadPermissionsAsync('2279625532289242', {
    permissions: ['public_profile'],
  }).then(({ type, token }) => {
    if (type === 'success') {
      getFacebookUserInfo(token)
        .then(({ name, picture }) => {
          UserAC.userDefined({
            name,
            picture: picture.data.url,
          });
          Alert.alert('Welcome!', `Hi ${name}!`);
        })
        .catch(error => console.log('error: ', error));
    } else {
      Alert.alert('Cancel!', 'You canceled login with Facebook');
    }
  }).catch(({ message }) => Alert.alert(`Facebook Login Error: ${message}`));
}

export const getFacebookUserInfo = token =>
  new Promise(async (resolve, reject) =>
    fetch(`https://graph.facebook.com/me?access_token=${token}&fields=name,picture.type(large)`)
      .then(result => result.json())
      .then((data) => {
        resolve(toCamelCase(data));
      })
      .catch((error) => {
        console.log('Error retrieving facebook graph data: ', error);
        reject(error);
      }));

export const setUser = (user) => (dispatch) => {
  dispatch(MetaAC.syncOperationLoading());
  userApi.login(user)
    .then((result) => {
      if (result.status === 200) {
        localStorage.setItem('currentUser', JSON.stringify({ token: result.data.token }));
        dispatch(UserAC.setUser(result.data));
        dispatch(MetaAC.syncOperationFinished(result));
        browserHistory.push('/submeterprojeto');
      } else {
        dispatch(MetaAC.syncOperationFinished(result.data.error));
        console.log('login error: ', result.data);
        alert(result.data.error === 'Not Found' ? 'CPF não encontrado!' : result.data.error);
      }
    })
    .catch((error) => {
      dispatch(MetaAC.syncOperationFinished(error));
      alert('CPF ou senha incorreto!');
      console.log('login error: ', error);
    });
};

export const tokenConfirm = (token) => (dispatch) => {
  dispatch(MetaAC.syncOperationLoading());
  userApi.confirmation(token)
    .then((result) => {
      if (result.status === 200) {
        dispatch(MetaAC.syncOperationFinished(result));
      } else {
        console.log('confirmation error: ', result.error);
        dispatch(MetaAC.syncOperationFinished(result));
        alert(result.error);
      }
    })
    .catch((error) => {
      dispatch(MetaAC.syncOperationFinished(error));
      console.log('confirmation error: ', error);
    });
};