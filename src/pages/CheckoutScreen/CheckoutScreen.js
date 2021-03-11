import React, { Component } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

class CheckoutScreen extends Component {
  initStripePayment = async () => {
    console.log('CLICKED MAKE A PAYMENT')
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const response = await axios.post(
      process.env.REACT_APP_API_URL + "/api/payments/checkout-session",
      {},
      { withCredentials: true }
    );

    const session = await response.data;

    console.log('response.data', response.data)

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  render() {
    return (
      <div>
        <h1>Checkout Screen</h1>

        <button onClick={this.initStripePayment}> Make a payment</button>
      </div>
    );
  }
}

export default CheckoutScreen;
