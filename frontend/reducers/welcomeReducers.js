import {
  REGISTRATION_REQUEST,
  LOGIN_REQUEST,
  WELCOME_RESPONSE,
  LOGIN_FAILURE
} from '../actions/welcomeActions';

export default function welcome(
  state = {
    userId: '',
    username: '',
    decks: [],
    isFetching: false,
    error: ''
  }, action
) {
  switch(action.type) {
    case REGISTRATION_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case WELCOME_RESPONSE:
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