import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ data }) => {
    const stripe = useStripe()
    const elements = useElements()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false)
    const [clientSecret, setClientSecret] = useState("");
    const navigate = useNavigate()
    const { customerName, customerEmail, customerPhoneNo, productId, resalePrice, sellersName, sellerEmail, ProductName, sellerPhoneNo, _id } = data

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://phone-garage-server.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ resalePrice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [resalePrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })
        if (error) {
            // console.log(error)
            setError(error.message)
        }
        else {
            setError('')
        }

        setProcessing(true)
        setSuccess('');

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: customerName,
                        email: customerEmail
                    },
                },
            },
        );
        if (confirmError) {
            setError(confirmError)
            return;
        }
        if (paymentIntent.status === "succeeded") {
            const payment = {
                resalePrice,
                transactionId: paymentIntent.id,
                customerEmail,
                bookingId: _id,
                customerName,
                customerPhoneNo,
                productId,
                sellersName,
                sellerEmail,
                ProductName,
                sellerPhoneNo,
            }
            fetch(`https://phone-garage-server.vercel.app/payments`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setSuccess('Congrats! your payment completed');
                        setTransactionId(paymentIntent.id);
                        setProcessing(false)
                        // navigate("/dashboard")
                        toast.success("Payment completed successfully")
                    }
                })
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary mt-5' type="submit"
                    disabled={!stripe || !clientSecret || processing}>
                    Payment Now
                </button>
            </form>
            <div>
                <p className='text-red-400 mt-2 text-xl'>{error}</p>
            </div>
            <div>
                {
                    success && <div>
                        <p className='text-green-500'>{success}</p>
                        <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
                    </div>
                }
            </div>
        </>
    );
};

export default CheckoutForm;