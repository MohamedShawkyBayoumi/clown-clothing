import React from "react";
import { connect } from "react-redux";
import "./checkout-item.scss";

import { clearItemFromCart, addItemToCart, increaseOrDecreaseItem } from "../../redux/actions/cartActions";

const CheckoutItem = ({ cartItem, clearItem, addItemToCart, increaseOrDecreaseItem }) => {
    const { name, imageUrl, price, qty } = cartItem;
    return (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => increaseOrDecreaseItem(cartItem)}>&#10094;</div>
                <span className="value">{qty}</span>
            <div className="arrow" onClick={() => addItemToCart(cartItem)}>&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItemToCart: item => dispatch(addItemToCart(item)),
    increaseOrDecreaseItem: item => dispatch(increaseOrDecreaseItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);