import React from "react";
import CustomButton from "../FORM/CustomButton";
import CartItem from "../CartItem/CartItem";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../utils/Memoization/cartSelectors";

import "./cart-dropdown.scss";

const CartDropDown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length > 0 && cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default connect(mapStateToProps, null)(CartDropDown);