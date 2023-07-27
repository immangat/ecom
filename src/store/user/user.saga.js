import {call, all, put, takeLatest} from 'redux-saga/effects'
import {USER_ACTION_TYPES} from "./user.types";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth, getCurrentUser, signInWithGooglePopup, signOutUser, signWithFirebaseEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import {signInFailure, signInSuccess, signOutFailed, signOutSuccess, userSignUp, userSignUpFail} from "./user.action";


export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails)
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
    } catch (e) {
        yield put(signInFailure(e))
    }
}

export function* signInWithGoogle() {
    try {
        const {user} = yield call(signInWithGooglePopup)
        yield call(getSnapshotFromUserAuth, user)
    } catch (e) {
        yield put(signInFailure(e))

    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser)
        if (!userAuth) return
        yield call(getSnapshotFromUserAuth, userAuth)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* signInWithEmail({payload: {email, password}}) {
    try {
        const {user} = yield call(signWithFirebaseEmailAndPassword, email, password)
        yield call(getSnapshotFromUserAuth, user)
    } catch (e) {
        yield put(signInFailure(e))
    }
}



export function* signUp({payload: {email, password, displayName}}){
    try {
        const {user} = yield call(createAuthUserWithEmailAndPassword, email, password)
        put(userSignUp, user, displayName)
    } catch (e) {
        yield put(userSignUpFail(e))
    }

}

export function* signUpUserDoc({payload : {user, displayName}}){
    try{
        yield call(getSnapshotFromUserAuth, user, displayName)
    } catch(e){
        yield put(userSignUpFail(e))
    }


}

export function* signOutUserAsync(){
    try{
        yield call(signOutUser)
        yield put(signOutSuccess())
    }catch (e) {
        yield put(signOutFailed(e))
    }
}

export function* makeSignUpDoc(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signUpUserDoc)
}
export function* onSignUp(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp)
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignInWithEmail() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onGoogleSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* signOut(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOutUserAsync)
}

export function* userSaga() {
    yield all([call(onCheckUserSession), call(onGoogleSignInStart), call(onSignInWithEmail), call(onSignUp), call(makeSignUpDoc), call(signOut)])
}