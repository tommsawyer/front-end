import {
  SET_MAX_PRICE,
  SET_MIN_PRICE,
  SET_SEARCH_ITEM_NAME,
  SET_SORTING_TYPE,
  SET_VENDOR
} from '../constants';

export const setMaxPrice = (maxPrice) => ({
  type: SET_MAX_PRICE,
  maxPrice
});

export const setMinPrice = (minPrice) => ({
  type: SET_MIN_PRICE,
  minPrice
});

export const setSearchItemName = (name) => ({
  type: SET_SEARCH_ITEM_NAME,
  name
});

export const setSortingType = (sortingType) => ({
  type: SET_SORTING_TYPE,
  sorting: sortingType
});

export const setVendor = (vendor) => ({
  type: SET_VENDOR,
  vendor
});
