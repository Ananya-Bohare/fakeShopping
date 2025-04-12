// src/components/Wishlist.js
import React from "react";
import { useSelector } from "react-redux";

const Wishlist = () => {
    const wishlistItems = useSelector((state) => state.wishlist.items);

    return (
        <div className="wishlist-container">
            <h2>Your Wishlist</h2>
            {wishlistItems.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <ul>
                    {wishlistItems.map((item) => (
                        <li key={item.id}>
                            <h3>{item.title}</h3>
                            <p>${item.price}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Wishlist;