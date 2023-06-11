import { Elements, useStripe } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div>
            <h3 className="text-3xl mb-20">Please Complete The Payment</h3>
            <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;