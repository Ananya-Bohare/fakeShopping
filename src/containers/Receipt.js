import React from "react";

const Receipt = ({ cartItems, totalPrice }) => {
  return (
    <div id="receipt">
      <h2>Receipt</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default Receipt;