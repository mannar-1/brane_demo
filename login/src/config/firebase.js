// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr1z6AFC7ijd3X5iuruLowkAd2UUJAUIk",
  authDomain: "userlogin-6f3ed.firebaseapp.com",
  projectId: "userlogin-6f3ed",
  storageBucket: "userlogin-6f3ed.appspot.com",
  messagingSenderId: "692290109271",
  appId: "1:692290109271:web:10c90ec6b8170186494812",
  measurementId: "G-QLBSL1WVLY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
