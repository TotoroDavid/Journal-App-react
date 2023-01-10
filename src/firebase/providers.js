
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth"
import { firebaseAuth } from "./config"

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
    prompt: 'select_account'
})

export const singInWithGoogle = async () => {

    try {
        const result = await signInWithPopup(firebaseAuth, googleProvider)
        // const credential = GoogleAuthProvider.credentialFromResult(result)
        const { displayName, email, photoURL, uid } = result.user
        // console.log(user)
        return {
            ok: true,
            //userInfo
            displayName, email, photoURL, uid
        }

    } catch (error) {
        const erroRCode = error.code
        const errorMessage = error.message
        return {
            ok: false,
            erroRCode,
            errorMessage
        }
    }
}

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {

    try {

        const resp = await createUserWithEmailAndPassword(firebaseAuth, email, password)
        const { uid, photoURL } = resp.user
        await updateProfile(firebaseAuth.currentUser, { displayName })

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {
        console.log(error);
        return { ok: false, errorMessage: error.message }
    }

}

export const loginWithEmailPassword = async ({ email, password }) => {

    try {

        const resp = await signInWithEmailAndPassword(firebaseAuth, email, password)
        const { uid, photoURL, displayName } = resp.user

        return {
            ok: true,
            uid, photoURL, displayName
        }

    } catch (error) {
        // console.log(error);
        return { ok: false, errorMessage: error.message }
    }
}

export const logoutFirebase = async () => {
    return await firebaseAuth.signOut()
}