import React, {useState, useEffect} from "react";
import { Elements } from '@stripe/react-stripe-js';
import {stripePromise} from '../Stripe/Stripe'
import CheckoutForm from "./CheckoutForm";

const CheckoutContainer = ({total, name, email, address }) => {
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/payment_intents", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({amount: {total},
            currency: "usd",
            name,
            email,
            address
            }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, []);

      const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret,
        appearance,
      };

      return (
        <div className="App">
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm total={total}/>
            </Elements>
          )}
        </div>
      );
}

export default CheckoutContainer

