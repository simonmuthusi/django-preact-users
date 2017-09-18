import { FETCH_USERS, CREATE_USER } from '../actions/index';

// const INITIAL_STATE = { all: [], user: null };

export default function(state = [], action) {
	console.log(action.payload);
  switch (action.type) {
    case FETCH_USERS:
      return action.payload.data;
     case CREATE_USER:
      return state;
    default:
      return state;
  }
}
