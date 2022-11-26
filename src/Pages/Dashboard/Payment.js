import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { useLoaderData } from 'react-router-dom';


const stripePromise = loadStripe(process.env.REACT_APP_stripe_key);
// console.log(stripePromise)
const Payment = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className=''>
            <div>
                <h1 className='text-2xl font-medium mt-4'>Payment</h1>
            </div>
            <div>
                <h1 className='text-xl mt-2 '>Hey, {data?.customerName}!  Complete the payment for {data?.ProductName} </h1>
            </div>
            <div className='mt-7'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        data={data}
                    />
                </Elements>
            </div>

        </div>
    );
};

export default Payment;