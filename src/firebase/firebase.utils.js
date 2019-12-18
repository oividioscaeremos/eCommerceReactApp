import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAX6yXjzBUKLZYYNv76Qd9RQPUs_m-4onE",
    authDomain: "mensandboyscloths.firebaseapp.com",
    databaseURL: "https://mensandboyscloths.firebaseio.com",
    projectId: "mensandboyscloths",
    storageBucket: "mensandboyscloths.appspot.com",
    messagingSenderId: "206188028508",
    appId: "1:206188028508:web:e8690a1d2580033dbf7c99",
    measurementId: "G-LM6J5N0R55"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {

    if(userAuth){
        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get();

        console.log(snapShot);
        if(!snapShot.exists){
            const {displayName, email} = userAuth;
            const createdAt = new Date();

            try{
                await userRef.set({
                    displayName,
                    email,createdAt,...additionalData
                })
            }catch(error){
                console.log("error creating user, "+error)
            }
        }
        return userRef;
    }else{
        return;
    }

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
