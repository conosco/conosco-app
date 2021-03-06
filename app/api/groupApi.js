import conoscoApi from './conoscoApi';
import { authToken } from '../helpers/token';

export default {
  getGroups: (token) => conoscoApi.get('/groups', authToken(token)),
  createGroup: (group) => conoscoApi.post('/groups', group)
};
