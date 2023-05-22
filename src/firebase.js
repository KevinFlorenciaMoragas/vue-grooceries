// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFhy5mDEKEUNep4K1bVO5N9UdUZoO0788",
  authDomain: "groceryes-5e7bf.firebaseapp.com",
  projectId: "groceryes-5e7bf",
  storageBucket: "groceryes-5e7bf.appspot.com",
  messagingSenderId: "911689092726",
  appId: "1:911689092726:web:94c1efc2aa9fb700e65957",
  measurementId: "G-7EM8X6LG6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);