export const userReceived = payload => ({
  type: 'USER_RECEIVED',
  payload,
});

export const setUser = payload => ({
  type: 'SET_USER',
  payload,
});

export const requestLogin = () => ({
  type: 'REQUEST_LOGIN',
});

export const errorLogin = () => ({
  type: 'ERROR_LOGIN',
});

export const fetchUserByEmail = userByEmail => ({
  type: 'FETCH_USER_BY_EMAIL',
  userByEmail,
});