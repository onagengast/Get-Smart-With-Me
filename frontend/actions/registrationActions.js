import axios from 'axios';

export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
function registrationRequest() {
  return {
    type: REGISTRATION_REQUEST
  };
}

export const REGISTRATION_RESPONSE = 'REGISTRATION_RESPONSE';
function registrationResponse(res) {
  return {
    type: REGISTRATION_RESPONSE,
    // Configure this to reflect however I set up the server and DB
    res: res
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
      dispatch(registrationResponse(res));
    })
    .catch(err => {
      console.log(err);
    });
  };
}

