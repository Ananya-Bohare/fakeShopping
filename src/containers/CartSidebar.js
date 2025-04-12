import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions/cartActions";

const CartSidebar = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId)); 
  };

  const handlePrintReceipt = () => {
    const printWindow = window.open("", "", "width=600,height=400");
    printWindow.document.write(`
      <html>
        <head>
          <title>Receipt</title>
          <style>
            body { font-family: Arial, sans-serif; }
            h2 { text-align: center; }
            table { width: 100%; border-collapse: collapse; }
            th, td { padding: 10px; border: 1px solid #ddd; }
            th { background-color: #f2f2f2; }
          </style>
        </head>
        <body>
          <h2>Receipt</h2>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              ${cartItems.map(item => `
                <tr>
                  <td>${item.title}</td>
                  <td>$${item.price.toFixed(2)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          <h3>Total: $${totalPrice.toFixed(2)}</h3>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
      </div>
      
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="item-details">
                  <h4 className="item-title">{item.title}</h4>
                  <p className="item-price">${item.price.toFixed(2)}</p>
                </div>
                <button 
                  className="remove-btn"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <div className="total-row">
              <span>Total:</span>
              <span className="total-price">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="checkout-btn" onClick={handlePrintReceipt}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;