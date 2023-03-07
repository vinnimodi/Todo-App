import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApjH2BQArjQyM9MRgNAUzas1IfJ6IYewM",
  authDomain: "todo-24d3e.firebaseapp.com",
  projectId: "todo-24d3e",
  storageBucket: "todo-24d3e.appspot.com",
  messagingSenderId: "328683036906",
  appId: "1:328683036906:web:cc30b9b24ec7ca5b2a7793",
  measurementId: "G-VMK3GPBCQ5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
