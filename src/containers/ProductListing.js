import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductCard from "./ProductCard";
import Filter from "./Filter";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const searchTerm = useSelector((state) => state.searchTerm);
  const selectedFilter = useSelector((state) => state.filter.selectedFilter);
  const sortOrder = useSelector((state) => state.filter.sortOrder);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/");
        dispatch(setProducts(response.data));
      } catch (err) {
        console.log("Error fetching products: ", err);
      }
    };
    fetchProducts();
  }, [dispatch]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredByCategory = selectedFilter.length === 0 || selectedFilter.includes("All")
    ? filteredProducts
    : filteredProducts.filter((product) =>
        selectedFilter.includes(product.category)
      );

  const sortedProducts = [...filteredByCategory].sort((a, b) => {
    return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
  });

  return (
    <div className="ui grid container">
      <div className="filter-sort-container">
        <Filter />
      </div>
      <div className="product-list">
        {sortedProducts.length === 0 ? (
          <h3>No Products Found</h3>
        ) : (
          sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductListing;
