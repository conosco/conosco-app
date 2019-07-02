import conoscoApi from './conoscoApi';
import { authToken } from '../helpers/token';

export default {
  getHabits: (token) => conoscoApi.get('/habit', authToken(token)),
  createHabit: (habit) => conoscoApi.post('/habit', habit)
};
