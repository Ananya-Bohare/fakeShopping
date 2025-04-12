import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setFilter, setSortOrder } from "../redux/actions/filterActions"; // Import actions

const Filter = () => {
  const dispatch = useDispatch();

  // Memoized Handlers
  const handleFilterChange = useCallback((event) => {
    const { value, checked } = event.target;
    if (checked) {
      dispatch(setFilter(value)); // Dispatch filter action
    } else {
      dispatch(setFilter("All")); // Reset filter if unchecked
    }
  }, [dispatch]);

  const handleSortChange = useCallback((event) => {
    dispatch(setSortOrder(event.target.value)); // Dispatch sort action
  }, [dispatch]);

  return (
    <div className="filter-container">
      <h3>Products</h3>
      <label>
        <input type="checkbox" value="All" onChange={handleFilterChange} /> All categories
      </label>
      <label>
        <input type="checkbox" value="electronics" onChange={handleFilterChange} /> Electronics
      </label>
      <label>
        <input type="checkbox" value="jewelery" onChange={handleFilterChange} /> Jewelery
      </label>
      <label>
        <input type="checkbox" value="men's clothing" onChange={handleFilterChange} /> Men's Clothing
      </label>
      <label>
        <input type="checkbox" value="women's clothing" onChange={handleFilterChange} /> Women's Clothing
      </label>

      <h3>Price</h3>
      <label>
        <input type="radio" name="sort" value="asc" defaultChecked onChange={handleSortChange} /> Price: Low to High
      </label>
      <label>
        <input type="radio" name="sort" value="desc" onChange={handleSortChange} /> Price: High to Low
      </label>
    </div>
  );
};

export default Filter;
