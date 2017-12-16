import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Router, Route } from 'react-router-dom';

const store = configureStore();
console.log(store.getState());
import history from '../history';

// import './assets/stylesheets/base.scss';

// const store = createStore(
//     rootReducer,
//     applyMiddleware(
//         thunkMiddleware
//     )
// );

render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Root}/>
      </Router>
    </Provider>,
    document.getElementById('root')
);