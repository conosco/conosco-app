import conoscoApi from './conoscoApi';

export default {
  getUser: userId => conoscoApi.get(`users/${userId}.json`),
  login: (user) => conoscoApi.post('/auth/login', user),
};
