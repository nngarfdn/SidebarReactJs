import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBI6BSP7KEY3NlHP79Xqo0W41zjomxA_ZE",
    authDomain: "kampunganggur-87ca1.firebaseapp.com",
    projectId: "kampunganggur-87ca1",
    storageBucket: "kampunganggur-87ca1.appspot.com",
    messagingSenderId: "939500856715",
    appId: "1:939500856715:web:469bf6c2cb7d52a1eebb8e",
    measurementId: "G-E9S1HST3KJ"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
// export const storage = firebase.storage();
export const firestorenp = firebase.firestore();
export default firebase;


