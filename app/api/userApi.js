import conoscoApi from './conoscoApi';

export default {
  login: user => conoscoApi.post('/auth/login', user),
};
