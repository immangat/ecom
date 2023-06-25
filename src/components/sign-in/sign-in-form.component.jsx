import FormInput from "../form-input/form-input.component";
import {useState, useContext} from "react";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {signWithFirebaseEmailAndPassword, signInWithGooglePopup} from "../../utils/firebase/firebase.utils";
import userContext, {UserContext} from "../../contexts/user.context";
import {SignInContainer, Heading, SignForm, ButtonContainer} from "./sign-in-form.styles";


function SignInForm() {
    const emptyUserDetails = {
        email: "",
        password: "",

    }
    const {setCurrentUser} = useContext(UserContext)
    const [signInFormData, setSignInForm] = useState(emptyUserDetails)

    function handleInput(e) {
        const {name, value} = e.target
        setSignInForm(premForm => ({
            ...premForm,
            [name]: value

        }))
    }

    function resetForm() {
        setSignInForm(emptyUserDetails)
    }

    async function signIn(event) {
        event.preventDefault()
        const {email, password} = signInFormData
        try {
            const {user} = await signWithFirebaseEmailAndPassword(email, password)
            resetForm()
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect Email or Password')
                    break
                case 'auth/user-not-found' :
                    alert('Incorrect Email or Password')
                    break
                default:
                    console.log(error)
            }
        }

    }

    async function signInWithGoogle(event) {
        event.preventDefault()
        try {
            await signInWithGooglePopup()

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <SignInContainer className="sign-in-container">
            <Heading>Already have an account</Heading>
            <span> Sign in with your email and password</span>
            <SignForm className='sign-in-form' onSubmit={signIn}>
                <FormInput
                    label='Email'
                    required
                    name='email'
                    value={signInFormData.email}
                    onChange={handleInput}

                />
                <FormInput
                    label='password'
                    required
                    type='password'
                    name='password'
                    value={signInFormData.password}
                    onChange={handleInput}
                />
                <ButtonContainer className='sign-in-form-button-container'>
                    <Button
                        type='submit'
                    >
                        SIGN IN
                    </Button>
                    <Button
                        type='button'
                        onClick={signInWithGoogle}
                        buttonType={BUTTON_TYPE_CLASSES.google}
                    >
                        Google Sign IN
                    </Button>

                </ButtonContainer>
            </SignForm>

        </SignInContainer>
    )
}


export default SignInForm