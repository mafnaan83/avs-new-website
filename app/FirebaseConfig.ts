// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2sdnsQDnXOG-dz7bvC_5DVvyUacYTFa4",
  authDomain: "jscomputer-603dc.firebaseapp.com",
  projectId: "jscomputer-603dc",
  storageBucket: "jscomputer-603dc.firebasestorage.app",
  messagingSenderId: "457188748127",
  appId: "1:457188748127:web:9017053739465d748a64ea",
  measurementId: "G-XFX12PKE1L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export { db };
// const analytics = getAnalytics(app);
