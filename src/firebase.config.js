// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1ke6tXU46hGACvo5XOx4J5cspLHseCVQ",
    authDomain: "house-marketplace-app-bc079.firebaseapp.com",
    projectId: "house-marketplace-app-bc079",
    storageBucket: "house-marketplace-app-bc079.appspot.com",
    messagingSenderId: "51827004690",
    appId: "1:51827004690:web:ef5c444885225fec1e0fcb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();