import { combineReducers } from 'redux';
import decks from './decksReducers';
import registration from './registrationReducers';

// function rootReducer(state = {name: 'Horizons'}, action) {
//     switch (action.type) {
//         default:
//             return state;
//     }
// }

const rootReducer = combineReducers({
  decks,
  registration
});

export default rootReducer;
