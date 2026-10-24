// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXv9AYzpE7ldrSRow4wDTQOej7VApMH4E",
  authDomain: "progym-13e34.firebaseapp.com",
  projectId: "progym-13e34",
  storageBucket: "progym-13e34.firebasestorage.app",
  messagingSenderId: "279322752649",
  appId: "1:279322752649:web:8488eda16a45d36e66b858",
  measurementId: "G-1B1J47EBFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();