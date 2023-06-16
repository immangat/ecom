import {initializeApp} from 'firebase/app'
import
{
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'

import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};


const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
    prompt: "select_account"

})

export const auth = getAuth()

export async function signInWithGooglePopup() {
    return await signInWithPopup(auth, googleProvider)
}

export function signInWithGoogleRedirect() {
    signInWithRedirect(auth, googleProvider)
}

export const db = getFirestore();

export async function createUserDocumentFromAuth(userAuth, otherDetails) {
    if(!userAuth) return
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapchat = await getDoc(userDocRef)
    if (!userSnapchat.exists()) {
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...otherDetails
            })
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }
    return userDocRef
}

export async function createAuthUserWithEmailAndPassword(email, password){
    if(!email || !password) return

    return await createUserWithEmailAndPassword(auth, email, password)
}

export async function signWithFirebaseEmailAndPassword(email, password){
    if(!email || !password) return
    return await signInWithEmailAndPassword(auth,email, password)
}

export async function signOutUser(){
   return await signOut(auth)
}

export function onAuthStateChangedListener(callback){
   return onAuthStateChanged(auth,callback )
}
