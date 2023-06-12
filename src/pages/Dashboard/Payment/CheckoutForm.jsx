import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const CheckoutForm = ({ singleCls,  price }) => {

    const stripe = useStripe();
    const [axiosSecure] = useAxiosSecure()
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [cardError, setCardError] = useState('');
    const [clientSecret, SetClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        if(price > 0){
            axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret)
                SetClientSecret(res.data.clientSecret)
            })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log(error)
            setCardError(error.message)
        }
        else {
            setCardError('')
            // console.log(paymentMethod)
        }

        setProcessing(true);


        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'anonymous',
                    email: user?.email || 'unknown',
                },
            },
        })

        if (confirmError) {
            console.log(confirmError)
        }

        console.log(paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            // const transactionId = paymentIntent.id;
            // payment info
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                date: new Date(),
                price,
                cartId: singleCls._id,
                clsId: singleCls.classId,
                status: 'service pending',
                clsName: singleCls.class_name,
                clsImg: singleCls.class_picture,
            }
            axiosSecure.post('/payments', payment)
            .then(res =>{
                console.log(res.data);
                if(res.data.insertedId){
                    // 
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
                <button className="btn btn-sm bg-green-500 mt-3" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
                {cardError && <p className="text-red-500">{cardError}</p>}
                {transactionId && <p className="text-green-500">Payment completed id: {transactionId}</p>}
            </form>
        </>
    );
};

export default CheckoutForm;