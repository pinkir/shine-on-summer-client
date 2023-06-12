import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const singleCls = useLoaderData()
    const {price} = singleCls;
    console.log(price)
    return (
        <div>
            <h3 className="text-3xl mb-20">Please Complete The Payment</h3>
            <Elements stripe={stripePromise}>
            <CheckoutForm singleCls={singleCls} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;