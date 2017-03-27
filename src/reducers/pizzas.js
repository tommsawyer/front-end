import {
  FETCH_PIZZAS,
  FETCH_PIZZAS_SUCCESS,
  FETCH_PIZZAS_FAILURE
} from '../constants';

const initialState = {
  isFetching: false,
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PIZZAS:
      return {
        isFetching: true,
        items: []
      };
    
    case FETCH_PIZZAS_SUCCESS:
      return {
        isFetching: false,
        items: action.pizzas
      };

    case FETCH_PIZZAS_FAILURE:
      return {
        isFetching: false,
        items: []
      };

    default:
      return state;
  }
}
