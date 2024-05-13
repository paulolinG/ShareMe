// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDicNkcNhdfZXp5e9kb2Z3QLtodxiAN9-I",
  authDomain: "the-war-room-db2f9.firebaseapp.com",
  projectId: "the-war-room-db2f9",
  storageBucket: "the-war-room-db2f9.appspot.com",
  messagingSenderId: "438390475980",
  appId: "1:438390475980:web:3a62916b63065e767b0669",
  measurementId: "G-TPB0BPXXTS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

// const analytics = getAnalytics(app);
