import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js"
import {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {FormContainer, PaymentButton, PaymentFormContainer} from "./payment-form.styles";
import {useSelector} from "react-redux";
import {selectCartPrice} from "../../store/cart/cart.selector";
import {selectCurrentUser} from "../../store/user/user.selector";
import {useState} from "react";

const PaymentForm = () => {


    const stripe = useStripe()
    const element = useElements()
    const amount = useSelector(selectCartPrice)
    const currentUser = useSelector(selectCurrentUser)
    const [isProcessingPayment, setIsProcessingPayment] = useState(false)
    const paymentHandler = async (e) => {
        e.preventDefault()
        if(!stripe && !element){
            return;
        }

        setIsProcessingPayment(true)
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({ amount : amount * 100})
        }).then(res => res.json())
        const {paymentIntent: {client_secret}} = response
        let paymentResult = null
        try{
             paymentResult = await stripe.confirmCardPayment(client_secret,{
                payment_method: {
                    card : element.getElement(CardElement),
                    billing_details: {
                        name: currentUser ? currentUser.displayName : 'Guest'
                    }
                }
            })
        } catch (e) {
            console.log(e)
        }

        setIsProcessingPayment(false)
        console.log(paymentResult)
        if(paymentResult && paymentResult.error){
            alert(paymentResult.error)
        } else {
            alert('payment successful')
        }

    }
    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment</h2>
                <CardElement/>
                <PaymentButton isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}> Pay now</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>

    )
}


export default PaymentForm