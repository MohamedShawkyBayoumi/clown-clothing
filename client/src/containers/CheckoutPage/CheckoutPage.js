import React from "react";

import "./checkout.scss";

import { connect } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../utils/Memoization/cartSelectors";
import { createStructuredSelector } from "reselect";

import StripeCheckoutButton from "../../components/FORM/StripeButton";

import CheckoutHeaderBlock from "./CheckoutHeaderBlock";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { clearCart } from '../../redux/actions/cartActions';

const CheckoutPage = ({ cartItems, total, _clearCart, history }) => (
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
        <div className="test-warning">
            *Please user the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 10/22 - CVV: 123
        </div>
        <StripeCheckoutButton price={total} _clearCart={_clearCart} history={history} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

const mapDispatchToProps = dispatch => ({
    _clearCart: () => dispatch(clearCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);