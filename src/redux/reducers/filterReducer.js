// src/redux/reducers/filterReducer.js
const initialState = {
  selectedFilter: "All", // Default filter
  sortOrder: "priceAsc", // Default sort order
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
      case "SET_FILTER":
          return { ...state, selectedFilter: action.payload };
      case "SET_SORT_ORDER":
          return { ...state, sortOrder: action.payload };
      default:
          return state;
  }
};

export default filterReducer;
