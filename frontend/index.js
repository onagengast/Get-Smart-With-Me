import React from 'react';
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { fetchDecks } from './actions/index'
import { render } from 'react-dom';
import decks from './reducers/decks'
import Root from './containers/Root';

import './assets/stylesheets/base.scss';

const store = createStore(
    decks, 
    applyMiddleware (
        thunkMiddleware
    )
);

render(
    <Root store={store} history={history} />,
    document.getElementById('root')
);
