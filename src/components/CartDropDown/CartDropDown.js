import React from "react";
import CustomButton from "../FORM/CustomButton";
import CartItem from "../CartItem/CartItem";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/actions/cartActions";

import { withRouter } from "react-router-dom";

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../utils/Memoization/cartSelectors";

import "./cart-dropdown.scss";

const CartDropDown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length > 0 ? 
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) : 
                <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps, null)(CartDropDown));