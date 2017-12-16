import {
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  LOGIN_FAILURE
} from '../actions/loginActions';

export default function login(
  state = {
    error: ''
  }, action
) {
  switch(action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case LOGIN_RESPONSE:
      return Object.assign({}, state, {
        isFetching: false,
        userId: action.data.userId,
        username: action.data.username,
        decks: action.data.decks
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        error: 'Login attempt failed. Please check your username and password and try again.'
      });
    default:
      return state;
  }
}