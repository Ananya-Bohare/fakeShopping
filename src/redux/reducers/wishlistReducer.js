// src/redux/reducers/wishlistReducer.js
const initialState = {
    items: [],
};

const wishlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_WISHLIST":
            // Check if the product is already in the wishlist
            const existingProduct = state.items.find(item => item.id === action.payload.id);
            if (existingProduct) {
                return state; // Do not add if already in wishlist
            }
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case "REMOVE_FROM_WISHLIST":
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };
        default:
            return state;
    }
};

export default wishlistReducer;