import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsNwNlpr1JK0zUOc7lChMqHFNeRDOic-U",
  authDomain: "merkarii.firebaseapp.com",
  projectId: "merkarii",
  storageBucket: "merkarii.appspot.com",
  messagingSenderId: "248898223613",
  appId: "1:248898223613:web:a094f4bb568bb6d5fbad94",
  measurementId: "G-CLSW2D7D69",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
};
export const firestore = getFirestore(app);
export { collection, query, orderBy, onSnapshot, addDoc };
