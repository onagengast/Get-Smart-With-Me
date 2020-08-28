import axios from 'axios';
import history from '../../history';
// import { REGISTRATION_REQUEST } from './registrationActions';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
function loginRequest() {
  return {
    type: LOGIN_REQUEST
  };
}

export const LOGIN_RESPONSE = 'LOGIN_RESPONSE';
function loginResponse(data) {
  return {
    type: LOGIN_RESPONSE,
    data: data
  };
}

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
function loginFailure() {
  return {
    type: LOGIN_FAILURE
  };
}

export function login(username, password) {
  return function(dispatch) {
    dispatch(loginRequest());
    return axios.post('/login', {
      username: username,
      password: password
    })
    .then(res => {
      if (res.data.error) {
        dispatch(loginFailure());
      } else {
        dispatch(loginResponse(res.data));
        history.push('/home');
      }
    })
    .catch(err => {
      console.log(err);
    });
  };
}