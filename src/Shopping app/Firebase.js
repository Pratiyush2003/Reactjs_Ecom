// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF15VO8EK8yJsx465leYVgn29atLPlFZs",
  authDomain: "shopping-cart-70a59.firebaseapp.com",
  projectId: "shopping-cart-70a59",
  storageBucket: "shopping-cart-70a59.appspot.com",
  messagingSenderId: "902722497691",
  appId: "1:902722497691:web:005b685627a46c44b12a3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
export {db, auth}
