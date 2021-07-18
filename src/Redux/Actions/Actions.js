import { ADD_USER_ITEM, ALREADY_LOGIN, FETCH_ADS, FETCH_PROFILE_INFO, Fetch_SINGLE_AD, FETCH_USER_ITEM, GOOGLE_LOGIN, LOGIN, LOGOUT } from "../Types/Types"
import { db, auth,storage } from "../../Config/Firebase"
import { Firebase } from "../../Config/Firebase"
// import { dispatch } from "react-hot-toast/dist/core/store";
// import { GoogleAuthProvider } from "firebase/auth"

export const doLogin = (email, password) => async (dispatch) => {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        var users = userCredential.user;
        console.log("user", users.uid);
        dispatch({
            type: LOGIN,
            payload: users,
        })
    } catch (error) {
        alert(JSON.stringify(error))
        console.log(error);
    }
}
export const alreadyLoginUser = (setLoading) => async (dispatch) => {
    try {
        const LoginUser = await Firebase.auth().onAuthStateChanged((user) => {

            if (user) {
                var uid = user.uid;
                console.log("uid", uid);
                dispatch({
                    payload: user,
                    type: ALREADY_LOGIN


                })
                setLoading(false)
            }
            else {
                setLoading(false)
            }
            // console.log("LoginUser", LoginUser);
        })
    } catch (error) {
        alert(JSON.stringify(error))
    }

}
export const doSignUp = (user) => async (dispatch) => {
    try {
        //FIREBASE LOGIN
        const userCredential = await auth.createUserWithEmailAndPassword(user.email, user.password);
        var userData = userCredential.user;
        // FIREBASE DATABASE
        await db.collection("users").add({
            ...user,
            uid: userData.uid
        })
        dispatch({
            type: LOGIN,
            payload: userData,
        })
    } catch (error) {
        alert(JSON.stringify(error))
        console.log(error);
    }
}

export const doLogout = () => async (dispatch) => {
    try {
        const res = await auth.signOut();
        console.log("user", res);
        dispatch({
            type: LOGOUT,
        })
    } catch (error) {
        alert(JSON.stringify(error))
        console.log(error);
    }
}

export const LoginWithGoogle = (setLoading) => async (dispatch, result) => {
    try {
        setLoading(true)
        var provider = new Firebase.auth.GoogleAuthProvider();
        await provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        console.log("provider", provider);
        Firebase.auth()
            .signInWithPopup(provider)
        var users = result.user;
        console.log(users);
        
        dispatch({
            type: GOOGLE_LOGIN,
        })
    } catch (error) {
        alert(JSON.stringify(error))
    }
    finally {
        setLoading(false)
    }
}
export const LoginWithFacebook = () => async (dispatch) => {
    try {
        var FacebookLogin = new Firebase.auth.FacebookAuthProvider();
        console.log("FacebookLogin", FacebookLogin);
        Firebase
            .auth()
            .signInWithPopup(FacebookLogin)
        dispatch({
            type: GOOGLE_LOGIN,
        })
    } catch (error) {

    }
}






    