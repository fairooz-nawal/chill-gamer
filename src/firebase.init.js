// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsIt-gOXWHIevZ-sOXe63HX9DqKMr16RI",
  authDomain: "chill-gamer-599f6.firebaseapp.com",
  projectId: "chill-gamer-599f6",
  storageBucket: "chill-gamer-599f6.firebasestorage.app",
  messagingSenderId: "417641038022",
  appId: "1:417641038022:web:1911a57f8bcf06142217c7",
  measurementId: "G-WYW1PP4ZNQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;