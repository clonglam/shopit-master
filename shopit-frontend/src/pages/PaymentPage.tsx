import '../styles/striple.css'

import { Elements } from '@stripe/react-stripe-js'
import {
  Appearance,
  loadStripe,
  StripeElementsOptions,
} from '@stripe/stripe-js'
import React, { useEffect, useState } from 'react'

import CheckoutForm from '../components/payment/CheckoutForm'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PRUBLIC_KEY)

export default function PaymentPage() {
  const [clientSecret, setClientSecret] = useState('')

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(`${import.meta.env.VITE_BACKEND_DOMAIN}/checkout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [{ id: 'xl-tshirt' }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
  }, [])

  const appearance: Appearance = {
    theme: 'stripe',
  }
  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  }

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  )
}
