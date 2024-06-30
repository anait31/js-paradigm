// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbLJga_eJA0-UR0K_BwpFcKlXCtLZE3iU",
  authDomain: "js-paradigm.firebaseapp.com",
  projectId: "js-paradigm",
  storageBucket: "js-paradigm.appspot.com",
  messagingSenderId: "8932236918",
  appId: "1:8932236918:web:624dadbf975eb561ca8957"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;