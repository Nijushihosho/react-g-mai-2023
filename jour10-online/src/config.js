// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBamhsG7lo_vjESVJoot_ToSAUB8gAcoLs",
  authDomain: "fir-greta.firebaseapp.com",
  projectId: "fir-greta",
  storageBucket: "fir-greta.appspot.com",
  messagingSenderId: "620538885768",
  appId: "1:620538885768:web:b539dba4804b8676d5113d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 