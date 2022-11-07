import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import './paymentForm.css'
export default function CheckoutForm() {

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  useEffect(() => {

    window.fetch("/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: [] }),
    }).then((res) => { 
      return res.json();
    }).then((data) => {
      setClientSecret(data.clientSecret);
    });
  }, []);
  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };
return (
  <div id="body">
    <div id="header-div">
        <h1 id="header-cart-word">Cart</h1>
        <h3>Your cart is Empty</h3>
    </div>
    <div id="body-div">
        <div id="payment-div">
          <h3 id="payment-info-text">Payment Info</h3>
          <ul id="ul">
            <li class="li-item">First name:</li>
            <li class="li-item">Last Name:</li>
            <li class="li-item">Email:</li>
          </ul>
          <form id="payment-form" onSubmit={handleSubmit}>
              <CardElement 
                id="card-element"
                // {/* Specify styles here */}
                options={{}} 
                onChange={handleChange}
              />
              <div id="total-pay-div">
                <h5>Your Total is:</h5>
                <button disabled={processing || disabled || succeeded} id="submit">
                  <span id="button-text">
                    {processing ? <div className="spinner" id="spinner"></div> : "Pay"}
                  </span>
                </button>
                {/* Show any error that happens when processing the payment */}
                {error && (
                  <div className="card-error" role="alert">{error}</div>
                )}
                {/* Show a success message upon completion */}
                <p className={succeeded ? "result-message" : "result-message hidden"}>Payment succeeded!</p>
              </div>
            </form>
        </div>
      <div id="cart-div"></div>
      <div></div>
    </div>
  </div>
  );
}