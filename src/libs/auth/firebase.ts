// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUsZAO8xLF-jDHfGpJdn5Hqc_8KSyTW48",
  authDomain: "learning-f3b2e.firebaseapp.com",
  projectId: "learning-f3b2e",
  storageBucket: "learning-f3b2e.appspot.com",
  messagingSenderId: "730513458479",
  appId: "1:730513458479:web:2dbb2f54069324aa87cdda",
  measurementId: "G-3RN58E4JVL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
