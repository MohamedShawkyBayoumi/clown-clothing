import React from "react";

import "./checkout.scss";

import { connect } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../utils/Memoization/cartSelectors";
import { createStructuredSelector } from "reselect";

import CheckoutHeaderBlock from "./CheckoutHeaderBlock";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

const CheckoutPage = ({ cartItems, total }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <CheckoutHeaderBlock 
                spanText="Product"
            />
            <CheckoutHeaderBlock 
                spanText="Description"
            />
            <CheckoutHeaderBlock 
                spanText="Quantity"
            />
            <CheckoutHeaderBlock 
                spanText="Price"
            />
            <CheckoutHeaderBlock 
                spanText="Remove"
            />
        </div>
        {cartItems.length > 0 && cartItems.map(cartItem => 
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />    
        )}
        <div className="total">
            <span>TOTAL: ${total}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps, null)(CheckoutPage);