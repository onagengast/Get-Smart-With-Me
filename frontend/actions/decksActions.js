import axios from 'axios';

export const SELECT_DECK = 'SELECT_DECK';
export function selectDeck(deck) {
  return {
    type: SELECT_DECK,
    deck
  };
}

export const CREATE_DECK_REQUEST = 'CREATE_DECK_REQUEST';
function createDeckRequest() {
  return {
    type: CREATE_DECK_REQUEST
  };
}

export const CREATE_DECK_RESPONSE = 'CREATE_DECK_RESPONSE';
function createDeckResponse(json) {
  return {
    type: CREATE_DECK_RESPONSE
    // Pull out the deck id from the response
    // deck: deckId
  };
}

export const REQUEST_DECKS = 'REQUEST_DECKS';
function requestDecks() {
  return {
    type: REQUEST_DECKS
  };
}

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
function receiveDecks(data) {
  return {
    type: RECEIVE_DECKS,
    decks: data
  };
}

export function fetchDecks(userId) {
  return function(dispatch) {
    dispatch(requestDecks());
    return axios.post('/home', {
      userId: userId
    })
    .then(res => {
      dispatch(receiveDecks(res.data));
    })
    .catch(err => console.log(err));
  };
}

export function createDeck(userId, name, description) {
  return function(dispatch) {
    dispatch(createDeckRequest());
    return axios.post('/createNewDeck', {
      userId: userId,
      name: name,
      description: description
    })
    .then(res => {
      console.log(res.data);
      dispatch(receiveDecks(res.data));
    })
    .catch(err => console.log(err));
  };
}