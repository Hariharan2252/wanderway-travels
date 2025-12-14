// src/firebase/auth.js

import app from "./firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

export const auth = getAuth(app);

// Signup
export const signupUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

// Login
export const loginUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

// Logout
export const logoutUser = () => signOut(auth);

// Listen to auth changes
export const authStateListener = (callback) =>
  onAuthStateChanged(auth, callback);
