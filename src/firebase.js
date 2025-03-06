// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-48d4b.firebaseapp.com",
  projectId: "mern-estate-48d4b",
  storageBucket: "mern-estate-48d4b.firebasestorage.app",
  messagingSenderId: "1059063190118",
  appId: "1:1059063190118:web:dcb4663260d07ff7d913a7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);