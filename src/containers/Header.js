import React from "react";
import { useSelector } from "react-redux";
import SearchBar from "../containers/SearchBar";

const Header = ({ toggleSidebar }) => {
  const cartItems = useSelector((state) => state.cart.items); // Get cart items from Redux

  return (
    <div className="ui fixed menu">
      <div className="ui container header-container">
        <h1 className="header-title">FakeShopping</h1>
        <SearchBar />
        <div className="item cart-info" onClick={toggleSidebar} style={{ cursor: 'pointer' }}>
          Items Added: {cartItems.length}
        </div>
      </div>
    </div>
  );
};

export default Header;