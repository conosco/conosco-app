export const userDefined = user => ({
  type: 'USER_DEFINED',
  user,
});

export const setUser = user => ({
  type: 'SET_USER',
  user,
});