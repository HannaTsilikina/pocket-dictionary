// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHr_ekKF39AxthDm0nn8mzKyusaPe6z90",
  authDomain: "pocket-dictionary-be694.firebaseapp.com",
  projectId: "pocket-dictionary-be694",
  storageBucket: "pocket-dictionary-be694.appspot.com",
  messagingSenderId: "131602875621",
  appId: "1:131602875621:web:600f14d8fa599fbe7ac00c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
