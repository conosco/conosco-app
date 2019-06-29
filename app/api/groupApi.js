import conoscoApi from './conoscoApi';
import { authToken } from '../helpers/token';

export default {
  getGroups: (groups, token) => conoscoApi.get('/groups', (token)),
};
