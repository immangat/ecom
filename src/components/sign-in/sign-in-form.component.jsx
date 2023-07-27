import FormInput from "../form-input/form-input.component";
import {useState} from "react";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {SignInContainer, Heading, SignForm, ButtonContainer} from "./sign-in-form.styles";
import {useDispatch} from "react-redux";
import {emailSignInStart, googleSignInStart} from "../../store/user/user.action";


function SignInForm() {

    const dispatch = useDispatch()
    const emptyUserDetails = {
        email: "",
        password: "",

    }
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
            dispatch(emailSignInStart(email, password))
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
            dispatch(googleSignInStart())
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