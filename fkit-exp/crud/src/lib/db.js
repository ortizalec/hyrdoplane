import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdBNG_gxPeqFQnLkyFjL5wb54gEPw3abM",
  authDomain: "fkit-examples.firebaseapp.com",
  projectId: "fkit-examples",
  storageBucket: "fkit-examples.appspot.com",
  messagingSenderId: "1085464094674",
  appId: "1:1085464094674:web:2fb3099071d76137080a0b",
  measurementId: "G-91449EBGPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
