// src/containers/Cart.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/actions/cartActions";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <button onClick={() => handleRemove(item)}>Remove</button>
            </div>
          ))}
          <button onClick={handleClear}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;