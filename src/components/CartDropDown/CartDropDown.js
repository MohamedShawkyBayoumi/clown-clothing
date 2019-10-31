import React from "react";
import CustomButton from "../FORM/CustomButton";
import CartItem from "../CartItem/CartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../utils/cartSelectors";

import "./cart-dropdown.scss";

const CartDropDown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length > 0 && cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps, null)(CartDropDown);