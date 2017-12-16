import { combineReducers } from 'redux';
import decks from './decksReducers';
import welcome from './welcomeReducers';

// function rootReducer(state = {name: 'Horizons'}, action) {
//     switch (action.type) {
//         default:
//             return state;
//     }
// }

const rootReducer = combineReducers({
  welcome,
  decks
});

export default rootReducer;
