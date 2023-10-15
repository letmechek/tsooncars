import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logo from '../../Assets/images/logo.png';

const stripePublicKey = process.env.STRIPE_SECRET_KEY;

const ReactCheckout = ({amount}) => {
    const handleToken = (token) => {
        console.log(token);
        // You can send the token to your server to process the payment
    };

    return (
        <StripeCheckout
            stripeKey="pk_test_51Mn7N6AzQHcVF6axcfUSnaT5DYwpyKJLRGKslB6IrZU3D0UBloFiCVh0llcOrxOZcATYQFfYlevXGKou2IhRC4Nu0051R5XXTi"
            token={handleToken}
            amount={amount * 100} 
            name="Tsoon Cars"
            image={logo}
            billingAddress
            shippingAddress
        />
    );
};

export default ReactCheckout;
