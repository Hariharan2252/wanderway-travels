import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBnhoMnLJifZ9WMkZXhi6WQeHBoQviilDk",
  authDomain: "wanderway-travels.firebaseapp.com",
  projectId: "wanderway-travels",
  storageBucket: "wanderway-travels.firebasestorage.app",
  messagingSenderId: "18560137516",
  appId: "1:18560137516:web:ee095b1f18b055380c1489",
  measurementId: "G-YW3H6T4YX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
