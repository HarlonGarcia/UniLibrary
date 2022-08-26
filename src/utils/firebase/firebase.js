import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDg5Semzv0U9jO9VSBE2xkOMMoE3YmQhTI",
    authDomain: "unilibrary-359716.firebaseapp.com",
    projectId: "unilibrary-359716",
    storageBucket: "unilibrary-359716.appspot.com",
    messagingSenderId: "333825987383",
    appId: "1:333825987383:web:2f60487e157467f5d500b2"
};
  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const database = getFirestore();

export const createUserDoc = async (userAuth) => {
    const userDocRef = doc(database, 'users', userAuth.uid);
    
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('Error creating the user doc: ' + error);
        }
    }
    
    return userDocRef;
}