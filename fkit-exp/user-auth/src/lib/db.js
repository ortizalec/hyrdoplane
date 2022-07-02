import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdBNG_gxPeqFQnLkyFjL5wb54gEPw3abM",
  authDomain: "fkit-examples.firebaseapp.com",
  projectId: "fkit-examples",
  storageBucket: "fkit-examples.appspot.com",
  messagingSenderId: "1085464094674",
  appId: "1:1085464094674:web:a02780e38479a719080a0b",
  measurementId: "G-62ZT8HYG6E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);