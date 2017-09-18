import { combineReducers } from 'redux';
import UserReducer from './reducer_users'
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  users: UserReducer,
  form: formReducer,
});

export default rootReducer;
