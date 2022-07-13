// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRi12iRM5cQIiKiYRCF_CYE6NHr2cLJb0",
  authDomain: "pruevas-51538.firebaseapp.com",
  projectId: "pruevas-51538",
  storageBucket: "pruevas-51538.appspot.com",
  messagingSenderId: "739873945472",
  appId: "1:739873945472:web:02c4a8ebd11fea53087365",
  measurementId: "G-255M1Q75ZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();