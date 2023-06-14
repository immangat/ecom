
import {
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

function SignIn(){


     async function logGoogleUser()  {
        const {user} = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h1>Sign in Page</h1>
            <SignUpForm />
            <button onClick={logGoogleUser}>
                Sign in With Google popup
            </button>
        </div>
    )
}

export default SignIn