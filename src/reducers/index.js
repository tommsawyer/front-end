import { combineReducers } from 'redux';

import pizzas from './pizzas.js';
import filter from './filter';

export default combineReducers({pizzas, filter});
