// filterActions.js

// Action Types
export const SET_FILTER = "SET_FILTER";
export const SET_SORT_ORDER = "SET_SORT_ORDER";

// Action Creators
export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter,
  };
};

export const setSortOrder = (order) => {
  return {
    type: SET_SORT_ORDER,
    payload: order,
  };
};
