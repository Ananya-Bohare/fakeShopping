export const addToCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: itemId, // Just the ID, not the whole item
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};