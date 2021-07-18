import firebase from "firebase"

   // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCqhHFoa1r6DdgSNiUeWig8f_I03p7asBw",
    authDomain: "myolxclone2.firebaseapp.com",
    projectId: "myolxclone2",
    storageBucket: "myolxclone2.appspot.com",
    messagingSenderId: "683090802318",
    appId: "1:683090802318:web:d7c416e06c166a66647bdf",
    measurementId: "G-78BH1H0DJP"
  };
  <script src="https://www.gstatic.com/firebasejs/5.0.4/firebase.js"></script>

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export const db = firebase.firestore();

//   export const storage = firebase.storage();
  export const auth = firebase.auth();
  export const Firebase=firebase;
  export const storage = firebase.storage();