import { combineReducers } from 'redux';

import user from './user';
import userByEmail from './user/userByEmail';
import modals from './nav';
import groups from './groups';
import habits from './habits';

export default combineReducers({
  user,
  userByEmail,
  modals,
  groups,
  habits
});
