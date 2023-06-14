import {useState} from "react";
import './sign-up.styles.scss'
import {createUserDocumentFromAuth, createAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
function SignUpForm() {

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
            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            if (user) {
                await createUserDocumentFromAuth(user, {displayName})
            }

            resetForm()

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use')
            } else {
                console.log("Error in sign-up using email and password", error.message())
            }
        }
    }

    return (
        <div className="sign-up-container">
            <h2>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={signUp}>
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
                <div className="sign-up-form-button-container">
                    <Button
                        type='submit'
                    >
                        SIGN UP

                    </Button>
                </div>
            </form>
        </div>
    )
}


export default SignUpForm