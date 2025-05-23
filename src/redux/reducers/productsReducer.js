import { ActionTypes } from "../constants/action-types";
const initialState = {
  products: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  console.log("Action received in productsReducer:", type, payload); // Add this
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};


export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};