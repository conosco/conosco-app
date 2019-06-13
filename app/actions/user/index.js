import { Alert } from 'react-native';
import { Facebook } from 'expo';
import toCamelCase from '../../helpers/toCamelCase';

import * as UserAC from './actionCreators';
import userApi from '../../api/userApi';

import { sucess } from '../../helpers/requests';

export const logIn = (navigation) => (dispatch) => {
  Facebook.logInWithReadPermissionsAsync('2279625532289242', {
    permissions: ['public_profile', 'email'],
  }).then(({ type, token }) => {
    if (type === 'success') {
      getFacebookUserInfo(token)
        .then(({ firstName, profilePic }) => {
          dispatch(UserAC.userReceived({
            name: firstName,
            profilePic: profilePic.data.url,
          }));
          Alert.alert('Bem vindo!', `Que bom que você está conosco, ${firstName}!`);
          navigation.navigate('Dashboard');
        })
        .catch(error => console.log('error: ', error));
    } else {
      Alert.alert('Você cancelou seu login com o Facebook');
    }
  }).catch(({ message }) => Alert.alert(`Facebook Login Error: ${message}`));
}

export const getFacebookUserInfo = token =>
  new Promise(async (resolve, reject) =>
    fetch(`https://graph.facebook.com/me?access_token=${token}&fields=email,first_name,last_name,picture.type(large)`)
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
    .then(({ status, data: body }) => {
      if (sucess(status)) {
        const { email, token, name, picture: profilePic } = body.data;
        dispatch(UserAC.userReceived({
          token,
          email,
          name,
          profilePic
        }));
        Alert.alert('Bem vindo!', 'Que bom que você está #conosco!');
        navigation.navigate('Dashboard', {email: body.data.email});
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

export const register = (user, navigation) => () => {
  userApi.register(user)
    .then(({ status, data }) => {
      if (sucess(status)) {
        Alert.alert('Agora você está #conosco!');
        navigation.navigate('Login');
      }
      else {
        console.log('register error: ', data);
        Alert.alert('Erro ao cadastrar');
      }
    })
    .catch((error) => {
      console.log('register error: ', error);
      Alert.alert('Erro ao cadastrar');
    })
};

export const loadUserByEmail = (email) => (dispatch) => {
  userApi.getUserByEmail(email)
    .then((result) => {
      if (result.status === 200) {
        const userByEmail = result.data;
        dispatch(UserAC.fetchUserByEmail(userByEmail));
      }
    })
    .catch((error) => {
      console.log(error);
      alert('Ocorreu um erro ao carregar o usuário!');
    });
};