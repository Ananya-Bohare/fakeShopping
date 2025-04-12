// components/SearchBar.js
import React from "react";
import { useDispatch, useSelector } from "react-redux"; // Import useSelector
import { setSearchTerm } from "../redux/actions/searchActions";

const SearchBar = () => {
  const searchTerm = useSelector((state) => state.searchTerm); // Get the search term from Redux
  const products = useSelector((state) => state.allProducts.products); // Get products from Redux
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log("Products :", filteredProducts); // Log filtered products

  return (
    <div className="ui grid container">
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange} // Use the function here
          placeholder="Search products..."
        />
      </div>
    </div>
  );
};

export default SearchBar;