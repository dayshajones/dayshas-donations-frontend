import React, {useState, useEffect} from "react";
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "./CheckoutForm"
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js"

// const apiKey = `${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`;
// const stripePromise = loadStripe(apiKey);
const stripePromise = loadStripe('pk_test_51Lcf9EDGH2pX2OqyeBwxggNKc17dDm6hLqGavVUIQbOnXgznfb15e8CS7z4JkbMg3ITMJ2d4eXfZHKEBjHCxXHKH00uqEKMQN4');

const CheckoutContainer = ({name, email, address }) => {

  const {state} = useLocation()
  const total = state.total

  const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/payment_intents", {
          method: "POST",
          headers: {   
            'Authorization': clientSecret,
            "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: parseInt(`${total}00`),
            name,
            email,
            address
            }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, []);

      const appearance = {
        theme: 'night',
        variables: {
          colorPrimary: '#f8e5e5',
          colorBackground: '#c39ea0',
        },
      };
      
      const options = {
        clientSecret,
        appearance,
      };

      return (
        <div className="checkout-container">
          {clientSecret && (
            <Elements options={options} stripe={stripePromise} key={clientSecret}>
              <CheckoutForm name={name} address={address}/>
            </Elements>
          )}
        </div>
      );
}

export default CheckoutContainer

