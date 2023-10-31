// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDLR0jN3JM8P1JeJiXYWwwvuW1yJOd5hU",
  authDomain: "real-estate-6a105.firebaseapp.com",
  projectId: "real-estate-6a105",
  storageBucket: "real-estate-6a105.appspot.com",
  messagingSenderId: "277937799496",
  appId: "1:277937799496:web:463bf9123499503476337d",
  measurementId: "G-JFS459TRZQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
