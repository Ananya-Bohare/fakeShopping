import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleProductClick = () => {
        navigate(`/product/${product.id}`);
    };

    const handleAddToCart = (e) => {
        e.stopPropagation();
        dispatch(addToCart(product));
    };

    return (
        <div className="product-card" onClick={handleProductClick}>
            <div className="product-image-container">
                <img src={product.image} alt={product.title} className="product-image" />
            </div>
            <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <button 
                    className="add-to-cart-btn" 
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;