export const SELECT_DECK = 'SELECT_DECK'
export function selectDeck(deck) {
  return {
    type: SELECT_DECK, 
    deck
  }
}

export const CREATE_DECK_REQUEST = 'CREATE_DECK_REQUEST'
function createDeckRequest() {
  return {
    type: CREATE_DECK_REQUEST
  }
}

export const CREATE_DECK_RESPONSE = 'CREATE_DECK_RESPONSE' 
function createDeckResponse(json) {
  return {
    type: CREATE_DECK_RESPONSE,
    // Pull out the deck id from the response 
    deck: deckId
  }
}

export const REQUEST_DECKS = 'REQUEST_DECKS' 
function requestDecks(userId) {
  return {
    type: REQUEST_DECKS, 
    userId
  }
}

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
function receiveDecks(json) {
  type: RECEIVE_DECKS, 
  // Modify what I pass to decks according to how I get them from the DB 
  decks: json.data.children.map(child => child.data)
}

export function fetchDecks(userId) {
  return function(dispatch) {
    dispatch(requestDecks(userId))
    // Then something that looks like the following: 
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(
      response => response.json(),
      // Do not use catch, because that will also catch
      // any errors in the dispatch and resulting render,
      // causing a loop of 'Unexpected batch number' errors.
      // https://github.com/facebook/react/issues/6895
      error => console.log('An error occurred.', error)
    )
    .then(json =>
      // We can dispatch many times!
      // Here, we update the app state with the results of the API call.

      dispatch(receiveDecks(subreddit, json))
    )
  }
}

export function createDeck(userId) {
  return function(dispatch) {
    dispatch(createDeckRequest())
  }
  return fetch(`something`)
  .then(
    response => response.json(), 
    error => console.log('An error occurred.', error)
  )
  .then(json => 
    dispatch(createDeckResponse(json.userId))
  )
}