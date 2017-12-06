import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { fetchDecks } from './actions/index';
import { render } from 'react-dom';
import rootReducer from './reducers/index';
import Root from './containers/Root';

import './assets/stylesheets/base.scss';

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
);

render(
    <Root store={store} history={history} />,
    document.getElementById('root')
);
