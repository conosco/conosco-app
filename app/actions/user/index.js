import { Alert } from 'react-native';
import { Facebook } from 'expo';
import toCamelCase from '../../helpers/toCamelCase';

import * as UserAC from './actionCreators';
import userApi from '../../api/userApi';

import { sucess } from '../../helpers/requests';

export const logIn = () => (dispatch) => {
  Facebook.logInWithReadPermissionsAsync('2279625532289242', {
    permissions: ['public_profile'],
  }).then(({ type, token }) => {
    if (type === 'success') {
      getFacebookUserInfo(token)
        .then(({ name, picture }) => {
          dispatch(UserAC.userReceived({
            name,
            picture: picture.data.url,
          }));
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

export const setUser = (user, navigation) => (dispatch) => {
  dispatch(UserAC.requestLogin());
  userApi.login(user)
    .then(({ status, data }) => {
      if (sucess(status)) {
        dispatch(UserAC.userReceived({
          token: data.token,
          email: data.user.email,
        }));
        navigation.navigate('Dashboard');
      }
      else {
        console.log('login error: ', data);
        dispatch(UserAC.errorLogin());
      }
    })
    .catch((error) => {
      console.log('login error: ', error);
      dispatch(UserAC.errorLogin());
    });
};