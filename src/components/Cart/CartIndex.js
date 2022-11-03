import React from 'react'
import ProductDisplay from './Stripe/CheckoutForm'
import Message from './Stripe/CheckoutForm'
import Checkout from './Stripe/CheckoutForm'

const CartIndex = ({user, msgAlert}) => {
    console.log('Clicked!')
    return (
        <div className='container-md'>
            <Checkout />
        </div>
    )
}

export default CartIndex