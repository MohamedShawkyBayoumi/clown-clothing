import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100; // Stripe needs the price in cents
    const publishablekey = "pk_test_BKmA5nqqcd3AdubdZKt2pDdZ00NsALvP7L";

    const onToken = async token => {
        
        try {
            let res = await axios({
                url: 'payment',
                method: 'post',
                data: {
                    amount: priceForStripe,
                    token
                }
            });

            console.log('Payment successful');
        } catch (error) {
            console.log('Payment error: ', JSON.parse(error));
            alert('There is an issue with your payment. please sure you use the provided credit cart.')
        }
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