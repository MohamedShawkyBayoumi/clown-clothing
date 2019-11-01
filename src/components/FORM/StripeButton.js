import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100; // Stripe needs the price in cents
    const publishablekey = "pk_test_BKmA5nqqcd3AdubdZKt2pDdZ00NsALvP7L";

    const onToken = token => {
        console.log(token);
        alert("Payment Successful");
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="CLOWN CLOTHING Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panellabel="Pay Now"
            token={onToken}
            stripeKey={publishablekey}
        />
    );
}


export default StripeCheckoutButton;