import {
  FETCH_PIZZAS,
  FETCH_PIZZAS_FAILURE,
  FETCH_PIZZAS_SUCCESS
} from '../constants';

import feathers from '../feathers.js';

export const fetchPizzas = () => (dispatch) => {
  dispatch({type: FETCH_PIZZAS});

  let pizzasService = feathers.service('pizzas');

  return pizzasService.find()
    .then(pizzas => {
      dispatch({
        type: FETCH_PIZZAS_SUCCESS,
        pizzas
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_PIZZAS_FAILURE,
        message: err.message || 'Error fetching pizzas'
      });
    });
}
