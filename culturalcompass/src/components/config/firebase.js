// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Add this import

const firebaseConfig = {
  apiKey: "AIzaSyC_veOPV9MRcEzjWbRFO87ER2HkDYBVmdU",
  authDomain: "eventsculturalcompass.firebaseapp.com",
  projectId: "eventsculturalcompass",
  storageBucket: "eventsculturalcompass.firebasestorage.app",
  messagingSenderId: "331743674074",
  appId: "1:331743674074:web:a1d87713ddb699c001afe3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };