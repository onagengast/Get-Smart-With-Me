import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

// import './assets/stylesheets/base.scss';

// const store = createStore(
//     rootReducer,
//     applyMiddleware(
//         thunkMiddleware
//     )
// );

render(
    <Provider store={store}>
      <Root />
    </Provider>,
    document.getElementById('root')
);