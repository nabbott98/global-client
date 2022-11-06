import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
// import {loadStripe} from '@stripe/stripe-js'
// import {Elements} from '@stripe/react-stripe-js'

// const stripePromise = loadStripe('pk_test_51LzixHFctdQVNwrZfvrkkfBX0bX2b6jWZ6eJnzYIPmUNh4vV5OueA9Ong8lbg5Y8lvaaHYRcBI6e0KZeiuKTixIk00nPUtcwLC');

ReactDOM.render(
  <BrowserRouter>
    {/* <Elements> */}
      <App />
    {/* </Elements> */}
  </BrowserRouter>,
  document.getElementById('root')
);
