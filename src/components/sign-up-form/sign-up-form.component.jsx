import {useState} from "react";
import {SignUpContainer, HeadingSignUp, Form, ButtonContainer} from "./sign-up.styles";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {useDispatch} from "react-redux";
import {emailSignUp} from "../../store/user/user.action";
function SignUpForm() {

    const dispatch = useDispatch()
    const emptyUserDetails = {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""

    }

    const [signUpFormData, setSignUpForm] = useState(emptyUserDetails)

    function handleInput(e) {
        const {name, value} = e.target
        setSignUpForm(premForm => ({
            ...premForm,
            [name]: value

        }))
    }

    function resetForm(){
        setSignUpForm(emptyUserDetails)
    }
    async function signUp(event) {

        event.preventDefault()

        const {email, password, confirmPassword, name: displayName} = signUpFormData

        if (password !== confirmPassword) {
            alert("Passwords do not match")
            return
        }

        try {
            dispatch(emailSignUp(email, password,displayName))
            resetForm()

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use')
            } else {
                console.log("Error in sign-up using email and password", error.message)
            }
        }
    }

    return (
        <SignUpContainer className="sign-up-container">
            <HeadingSignUp>I do not have a account</HeadingSignUp>
            <span>Sign up with your email and password</span>
            <Form className="sign-up-form" onSubmit={signUp}>
                <FormInput
                    label = "Display Name"
                    required
                    type="text"
                    name="name"
                    value={signUpFormData.name}
                    onChange={handleInput}
                />
                <FormInput
                    label = "Email"
                    required
                    type="email"
                    name="email"
                    value={signUpFormData.email}
                    onChange={handleInput}
                />
                <FormInput
                    label = "Password"
                    required
                    type="password"
                    name="password"
                    value={signUpFormData.password}
                    onChange={handleInput}
                />
                <FormInput
                    label = "Confirm Password"
                    required
                    type="password"
                    name="confirmPassword"
                    value={signUpFormData.confirmPassword}
                    onChange={handleInput}
                />
                <ButtonContainer className="sign-up-form-button-container">
                    <Button
                        type='submit'
                    >
                        SIGN UP

                    </Button>
                </ButtonContainer>
            </Form>
        </SignUpContainer>
    )
}


export default SignUpForm