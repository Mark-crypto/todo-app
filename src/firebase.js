// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpEqQP6hc78qRRJu0P3ej1Xi0CA884o44",
  authDomain: "todo-application-8fbe9.firebaseapp.com",
  projectId: "todo-application-8fbe9",
  storageBucket: "todo-application-8fbe9.firebasestorage.app",
  messagingSenderId: "268087540956",
  appId: "1:268087540956:web:039f49585007807a7e4819",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
