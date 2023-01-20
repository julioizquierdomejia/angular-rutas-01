// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaOVP61Ek-lQ2cOE6cNjgialtOMyXHnfk",
  authDomain: "angular-aed2e.firebaseapp.com",
  databaseURL: "https://angular-aed2e-default-rtdb.firebaseio.com",
  projectId: "angular-aed2e",
  storageBucket: "angular-aed2e.appspot.com",
  messagingSenderId: "817537520098",
  appId: "1:817537520098:web:fea57a435b09c893ed29bb",
  measurementId: "G-WPCQL3TGHX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);