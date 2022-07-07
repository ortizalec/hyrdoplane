import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdBNG_gxPeqFQnLkyFjL5wb54gEPw3abM",
  authDomain: "fkit-examples.firebaseapp.com",
  projectId: "fkit-examples",
  storageBucket: "fkit-examples.appspot.com",
  messagingSenderId: "1085464094674",
  appId: "1:1085464094674:web:d81c2bcce991882f080a0b",
  measurementId: "G-F83H2E1QMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);