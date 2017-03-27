import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { fetchPizzas } from './actions/pizzas.js';

import rootReducer from './reducers';
import thunk from 'redux-thunk';

const defaultStore = {};
const store = createStore(rootReducer, defaultStore, composeWithDevTools(applyMiddleware(thunk)));

store.dispatch(fetchPizzas())

export default store;
