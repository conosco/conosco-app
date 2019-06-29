import * as jwt_decode from 'jwt-decode';
import { AsyncStorage } from 'react-native';

export const tokenInfo = () => {
  try {
    return jwt_decode(token());
  }
  catch(Error){
    return null;
  }
}
export const TOKEN_KEY = "Bearer :token";

export const token = async () => {
  const tokenUser = await AsyncStorage.getItem(TOKEN_KEY);
  // console.log("token = ", tokenUser);
  return tokenUser;
}

export const auth = {
  headers: { 'Authorization': token() },
};

export const authToken = (token) => {
  return {
    headers: { 'Authorization': token },
  };
};