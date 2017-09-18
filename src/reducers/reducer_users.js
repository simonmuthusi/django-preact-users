import { FETCH_USERS, FETCH_USER } from '../actions/index';

// const INITIAL_STATE = { all: [], user: null };

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
}
