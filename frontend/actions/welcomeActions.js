import axios from 'axios';
import history from '../../history';

export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
function registrationRequest() {
  return {
    type: REGISTRATION_REQUEST
  };
}

// I only need one action to handle registration and login responses.
export const WELCOME_RESPONSE = 'WELCOME_RESPONSE';
function welcomeResponse(data) {
  return {
    type: WELCOME_RESPONSE,
    data: data
  };
}

export function register(username, password) {
  return function(dispatch) {
    dispatch(registrationRequest());
    return axios.post('/registration', {
      username: username,
      password: password
    })
    .then(res => {
      dispatch(welcomeResponse(res));
      history.push('/home');
    })
    .catch(err => {
      console.log(err);
    });
  };
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
function loginRequest() {
  return {
    type: LOGIN_REQUEST
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
        console.log(res);
        dispatch(welcomeResponse(res.data));
        history.push('/home');
      }
    })
    .catch(err => {
      console.log(err);
    });
  };
}

