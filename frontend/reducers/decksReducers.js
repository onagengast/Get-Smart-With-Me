import {
  SELECT_DECK,
  CREATE_DECK_REQUEST,
  CREATE_DECK_RESPONSE,
  REQUEST_DECKS,
  RECEIVE_DECKS
} from '../actions/decksActions';

export default function decks(
  state = {
    isUpdating: false,
    byId: {},
    allIds: [],
    decks: []
  }, action
) {
  switch(action.type) {
    case SELECT_DECK:
      return Object.assign({}, state, {
        selectedDeck: action.deck
      });
    case CREATE_DECK_REQUEST:
      return Object.assign({}, state, {
        isUpdating: true,
      });
    case CREATE_DECK_RESPONSE:
      const byIdNew = Object.assign({}, state.byId);
      byIdNew[action.deckId] = {
        id: action.deckId,
        isFetching: false,
        allCards: [],
        pile1: [],
        pile2: [],
        pile3: [],
        pile4: []
      };
      return Object.assign({}, state, {
        isUpdating: false,
        byId: byIdNew
      });
    case REQUEST_DECKS:
      return Object.assign({}, state, {
        isUpdating: true
      });
    case RECEIVE_DECKS: {
      console.log(action.data);
      return Object.assign({}, state, {
        isUpdating: false,
        decks: action.decks
      });
    }
    default:
      return state;
  }
}
