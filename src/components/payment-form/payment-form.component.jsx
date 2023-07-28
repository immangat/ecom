import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js"
import ButtonComponent, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {FormContainer, PaymentFormContainer} from "./payment-form.styles";

const PaymentForm = () => {
    const stripe = useStripe()
    const element = useElements()
    const paymentHandler = async (e) => {
        e.preventDefault()
        if(!stripe && !element){
            return;
        }

    }
    return (
        <PaymentFormContainer>
            <FormContainer>
                <h2>Credit Card Payment</h2>
                <CardElement/>
                <ButtonComponent buttonType={BUTTON_TYPE_CLASSES.inverted}> Pay now</ButtonComponent>
            </FormContainer>
        </PaymentFormContainer>

    )
}


export default PaymentForm