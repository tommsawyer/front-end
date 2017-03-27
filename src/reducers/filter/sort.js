import { SORT_ALPHABETICAL, SET_SORTING_TYPE } from '../../constants';

export default (state = SORT_ALPHABETICAL, action) => {

  if (action.type === SET_SORTING_TYPE)
    return action.sorting;

  return state;
}
