import sort from './sort';
import { combineReducers } from 'redux';

import {
  SET_MAX_PRICE,
  SET_MIN_PRICE,
  SET_SEARCH_ITEM_NAME,
  SORT_ALPHABETICAL,
  SORT_BY_PRICE_ASCENDING,
  SORT_BY_PRICE_DESCENDING,
  SET_VENDOR
} from '../../constants';

const initialState = {
  name: '',
  price: {
    min: 0,
    max: 1500
  },
  vendor: 'Все'
}

export const applyFilter = (items, filter) => {
  let { options, sort } = filter;

  return items
    .filter(item => options.vendor === 'Все' || item.vendor === options.vendor)
    .filter(item => item.name.toLowerCase().includes(options.name.toLowerCase()))
    .filter(item => item.price > options.price.min && item.price < options.price.max)
    .sort((first, second) => {
      switch(sort) {
        case SORT_ALPHABETICAL:
          return first.name > second.name ? 1 : -1;
        case SORT_BY_PRICE_ASCENDING:
          return first.price - second.price;
        case SORT_BY_PRICE_DESCENDING:
          return second.price - first.price;
        default:
          return first.name > second.name ? 1 : -1;
      }
    });
}


const options = (state = initialState, action) => {
  switch(action.type) {
    case SET_MAX_PRICE:
      return {
        ...state,
        price: {
          ...state.price,
          max: action.maxPrice
        }
      };


    case SET_MIN_PRICE:
      return {
        ...state,
        price: {
          ...state.price,
          min: action.minPrice
        }
      };

    case SET_SEARCH_ITEM_NAME:
      return {
        ...state,
        name: action.name
      };

    case SET_VENDOR:
      return {
        ...state,
        vendor: action.vendor
      };


    default:
      return state;
  }
};

export default combineReducers({options, sort})
