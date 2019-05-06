import conoscoApi from './conoscoApi';

export default {
  getUser: userId => conoscoApi.get(`users/${userId}.json`),
};
