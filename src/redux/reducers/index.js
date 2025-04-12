import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productsReducer";
import searchReducer from "./searchReducer";
import cartReducer from "./cartReducer";
import filterReducer from "./filterReducer"; // Import filter reducer
import wishlistReducer from "./wishlistReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  searchTerm: searchReducer,
  cart: cartReducer, // Add cart reducer
  filter: filterReducer, // Add filter reducer
  wishlist: wishlistReducer,
});
export default reducers;