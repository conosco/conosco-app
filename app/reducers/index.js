import { combineReducers } from 'redux';

import user from './user';
import userByEmail from './user/userByEmail';
import modals from './nav';

export default combineReducers({
  user,
  userByEmail,
  modals
});
