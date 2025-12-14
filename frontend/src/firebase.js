// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// REPLACE WITH YOUR FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyBnhoMnLJifZ9WMkZXhi6WQeHBoQviilDk",
  authDomain: "wanderway-travels.firebaseapp.com",
  projectId: "wanderway-travels",
  storageBucket: "wanderway-travels.firebasestorage.app",
  messagingSenderId: "18560137516",
  appId: "1:18560137516:web:ee095b1f18b055380c1489",
  measurementId: "G-YW3H6T4YX4"
};
const app = initializeApp(firebaseConfig);

// Firestore instance
export const db = getFirestore(app);
export default app;
