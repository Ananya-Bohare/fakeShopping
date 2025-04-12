import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import CartSidebar from "./containers/CartSidebar";
import ProductDetails from "./containers/ProductDetails";
import "./App.css";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <Router>
        <Header toggleSidebar={toggleSidebar} />
        <CartSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;