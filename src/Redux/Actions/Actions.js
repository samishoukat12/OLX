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
            console.log("LoginUser", LoginUser);
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


export const FetchAdsAction = (setLoading) => async (dispatch) => {
    try {
        setLoading(true)
        const Snapshot = await db.collection("CardsAds").get()
        let CardsAds = []
        Snapshot.forEach((doc) => {
            CardsAds.push({
                DocId: doc.id,
                ...doc.data()
            })
        })
        console.log("data from firebase into actions", CardsAds);
        dispatch({
            payload: CardsAds,
            type: FETCH_ADS

        });
    } catch (error) {
        console.log(error);
        alert(error)
    }
    finally {
        setLoading(false)
    }
}
export const FetchProfileAction = (setLoading) => async (dispatch) => {
    try {
        setLoading(true)
        const Snapshot = await db.collection("users").get()
        let users = []
        Snapshot.forEach((doc) => {
            users.push({
                DocId: doc.id,
                ...doc.data()
            })
        })
        console.log("data from firebase into actions", users);
        dispatch({
            payload: users,
            type: FETCH_PROFILE_INFO

        });
    } catch (error) {
        console.log(error);
        alert(error)
    }
    finally {
        setLoading(false)
    }
}

export const AddUserItemAction=(e,setFile,setURL,file,url,data,name,Title,Price,Description,FullName,setLoading)=>async(dispatch)=>{
    try {
        // e.preventDefault();
        // setLoading(true)
        var storageRef =await storage.ref();
         storageRef.child(`ProfileImg/${file.name}`).put(file);
        storage.refFromURL(`gs://bucket/ProfileImg/${file.name}`);
        storageRef.child(`ProfileImg/${file.name}`)
        var uploadTask2 = storageRef.child(`ProfileImg/${file.name}`)
        uploadTask2
      .getDownloadURL()
      .then((url) => {
      setURL( url)
    const database= db.collection("Products").doc().set({
          ProfilePhoto: url,
          Title,
          Price,
          Description,
          FullName,
      });
        console.log("data added into firebase in action",database);
    })
     
      
    dispatch({
        type:ADD_USER_ITEM,
        payload:data,
      
    })
    } catch (error) {
     alert(JSON.stringify(error)) 
     console.log(error);  
    }
    finally{
      // setLoading(false)
    }
    }
    export const FetchProfileItemAction = (setLoading) => async (dispatch) => {
        console.log("action fire");
        try {
            setLoading(true)
            const Snapshot = await db.collection("Products").get()
            let UserProfile = []
            Snapshot.forEach((doc) => {
                console.log( doc.id)
                UserProfile.push({
                    DocId: doc.id,
                    ...doc.data()
                })
            })
            console.log("data from firebase into actions", UserProfile);
            dispatch({
                payload: UserProfile,
                type: FETCH_PROFILE_INFO
    
            });
        } catch (error) {
            console.log(error);
            alert(error)
        }
        finally {
            setLoading(false)
        }
    }