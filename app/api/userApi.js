import conoscoApi from './conoscoApi';

export default {
  login: user => conoscoApi.post('/auth/login', user),
  register: user => conoscoApi.post('auth/register', user),
};
