import { combineReducers } from 'redux'
import decks from './decks'

function rootReducer(state = {name: 'Horizons'}, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default decks;
