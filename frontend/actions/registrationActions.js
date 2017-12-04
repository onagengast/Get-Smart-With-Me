export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST'
function registrationRequest(obj) {
  return {
    type: REGISTRATION_REQUEST, 
    credentials: obj
  }
}

export const REGISTRATION_RESPONSE = 'REGISTRATION_RESPONSE' 
function registrationRequest(res) {
  return {
    type: REGISTRATION_RESPONSE, 
    // Configure this to reflect however I set up the server and DB 
    success: res.credentials
  }
} 

