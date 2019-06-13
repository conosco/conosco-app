import { combineReducers } from 'redux';

import user from './user';
import userByEmail from './user/userByEmail';

export default combineReducers({
  user,
  userByEmail
});
