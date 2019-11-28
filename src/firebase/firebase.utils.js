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

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
        const { displayName, email }= userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch(e){
            console.log(e, 'error creating user');
        }
    }

    return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit()
};

export const convertCollectionSnapshotToMap = (collectionsSnapshot) => {
    const transformedCollection = collectionsSnapshot.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    // console.log(transformedCollection);
    return transformedCollection.reduce((acc, collection) => {
        acc[collection.title.toLowerCase()] = collection;
        return acc;
    }, {});
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;