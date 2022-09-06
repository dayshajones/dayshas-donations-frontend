import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { Elements } from '@stripe/react-stripe-js';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
// import {stripePromise} from './components/Stripe/Stripe'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        {/* <Elements stripe={stripePromise}> */}
          <App />
        {/* </Elements> */}
      </Router>
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();