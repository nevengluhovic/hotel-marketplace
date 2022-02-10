// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEyvURu4TuzAtPqGeN6Z4pN09NPs0pkqA",
  authDomain: "hotel-market-place.firebaseapp.com",
  projectId: "hotel-market-place",
  storageBucket: "hotel-market-place.appspot.com",
  messagingSenderId: "420582897876",
  appId: "1:420582897876:web:56da7cadc685af10a42341",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
