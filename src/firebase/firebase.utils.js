import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyC4mppiJVJtimzMkq81InWwLAreeYokiaU",
    authDomain: "clown-db.firebaseapp.com",
    databaseURL: "https://clown-db.firebaseio.com",
    projectId: "clown-db",
    storageBucket: "clown-db.appspot.com",
    messagingSenderId: "35204484327",
    appId: "1:35204484327:web:42c00a1a70555739caa642",
    measurementId: "G-J48FPS5SYV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;