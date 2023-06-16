import FormInput from "../form-input/form-input.component";
import {useState} from "react";
import Button from "../button/button.component";
import {signWithFirebaseEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import './sign-in-form.styles.scss'


function SignInForm() {
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
    function resetForm(){
        setSignInForm(emptyUserDetails)
    }
    async function signIn(event) {
        event.preventDefault()
        const {email, password} = signInFormData
        try {
            const {user} = await signWithFirebaseEmailAndPassword(email, password)
            resetForm()
        } catch (error) {
            switch(error.code){
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

    async function signInWithGoogle(event){
        event.preventDefault()
        try {
        const { user } = await signInWithGooglePopup()
        } catch(error){
            console.log(error)
        }
    }

    return (
        <div className="sign-in-container">
            <h2>Already have an account</h2>
            <span> Sign in with your email and password</span>
            <form className='sign-in-form' onSubmit={signIn}>
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
                    type = 'password'
                    name='password'
                    value={signInFormData.password}
                    onChange={handleInput}
                />
            <div className='sign-in-form-button-container'>
                <Button
                    type = 'submit'
                >
                    SIGN IN
                </Button>
                <Button
                    type = 'button'
                    onClick={signInWithGoogle}
                    buttonType='google'
                >
                    Google Sign IN
                </Button>

            </div>
            </form>

        </div>
    )
}


export default SignInForm