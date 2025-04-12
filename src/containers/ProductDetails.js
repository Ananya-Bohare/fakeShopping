import React, { useEffect, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productsActions";
import { addToWishlist } from "../redux/actions/wishlistActions";
import './ProductDetails.css';

const ProductDetails = () => {
    const { productId } = useParams();
    const product = useSelector((state) => state.product);
    const dispatch = useDispatch();

    const fetchProductDetail = useCallback(async (id) => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            console.log(response.data); // Log the response data to check the rating
            dispatch(selectedProduct(response.data));
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    }, [dispatch]);

    useEffect(() => {
        if (productId) {
            fetchProductDetail(productId);
        }
        return () => {
            dispatch(removeSelectedProduct());
        };
    }, [productId, fetchProductDetail, dispatch]);

    // Function to render star ratings
    const renderStars = (rating) => {
      const stars = [];
      const fullStars = Math.floor(rating); // Number of full stars
      const hasHalfStar = rating % 1 !== 0; // Check for a half star
  
      for (let i = 1; i <= 5; i++) {
          if (i <= fullStars) {
              // Full Star
              stars.push(<span key={i} className="star filled">★</span>);
          } else if (hasHalfStar && i === fullStars + 1) {
              // Half Star
              stars.push(<span key={i} className="star half-filled">★</span>);
          } else {
              // Empty Star
              stars.push(<span key={i} className="star">☆</span>);
          }
      }
      return stars;
  };
    
  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product)); // Dispatch the action to add the product to the wishlist
};

    return (
        <div className="product-details-container">
            {Object.keys(product).length === 0 ? null : (
                <div className="product-details">
                    <div className="product-image">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className="product-info">
                        <h2>{product.title}</h2>
                        <p className="price">${product.price}</p>
                        <div className="rating">
                          {product.rating && product.rating.rate
                          ? renderStars(product.rating.rate) // Call the renderStars function
                          : "No rating available"}
                          <span className="rating-count">({product.rating ? product.rating.count : 0} reviews)</span>
                      </div>

                        <p className="description">{product.description}</p>
                        <p className="category">{product.category}</p>
                        <button className="add-to-wishlist" onClick={handleAddToWishlist}>Add to Wishlist</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;