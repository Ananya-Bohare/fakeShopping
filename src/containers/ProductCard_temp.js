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
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="price">${product.price}</p>
            <button 
                className="add-to-cart" 
                onClick={handleAddToCart}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
