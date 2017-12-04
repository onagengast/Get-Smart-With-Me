import {
  REGISTRATION_REQUEST, 
  REGISTRATION_RESPONSE, 
} from '../actions/registrationActions' 

export default function registration(
  state = {
    userId: '', 
    username: ''
  }, action
) {
  switch(action.type) {
    case REGISTRATION_REQUEST: 
      return Object.assign({}, state, {
        isFetching: true
      })
    case REGISTRATION_RESPONSE: 
      return Object.assign({}, state, {
        isFetching: false, 
        userId: action.userId, 
        username: action.username
      })
  }
}