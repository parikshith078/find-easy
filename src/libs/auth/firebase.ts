import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCYcMxH4Z87WPWOlN1jWeoR1AFfFLEM02k",
    authDomain: "find-easy-edccb.firebaseapp.com",
    projectId: "find-easy-edccb",
    storageBucket: "find-easy-edccb.appspot.com",
    messagingSenderId: "687392079569",
    appId: "1:687392079569:web:94725135a47245aa43cff0",
    measurementId: "G-CGCE8N5XKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const { user } = await signInWithPopup(auth, provider);
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const signOutUser = () => {
  signOut(auth);
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

export const registerUserWithEmailAndPassword = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const loginUserWithEmailAndPassword = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getCollection = (collectionPath) => {
  return collection(db,collectionPath);
};




/*const firebaseConfig = {
    apiKey: "AIzaSyCYcMxH4Z87WPWOlN1jWeoR1AFfFLEM02k",
    authDomain: "find-easy-edccb.firebaseapp.com",
    projectId: "find-easy-edccb",
    storageBucket: "find-easy-edccb.appspot.com",
    messagingSenderId: "687392079569",
    appId: "1:687392079569:web:94725135a47245aa43cff0",
    measurementId: "G-CGCE8N5XKP"
};*/