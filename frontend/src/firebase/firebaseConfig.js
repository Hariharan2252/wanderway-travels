

// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase credentials
const firebaseConfig = {
  apiKey: "AIzaSyBnhoMnLJifZ9WMkZXhi6WQeHBoQviilDk",
  authDomain: "wanderway-travels.firebaseapp.com",
  projectId: "wanderway-travels",
  storageBucket: "wanderway-travels.firebasestorage.app",
  messagingSenderId: "18560137516",
  appId: "1:18560137516:web:ee095b1f18b055380c1489",
  measurementId: "G-YW3H6T4YX4"
};


// Initialize app
const app = initializeApp(firebaseConfig);

// Export Firestore DB
export const db = getFirestore(app);

// Export app (optional)
export default app;
